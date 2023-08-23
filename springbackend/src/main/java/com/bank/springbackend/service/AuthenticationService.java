package com.bank.springbackend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.JWTLoginRequest;
import com.bank.springbackend.communication.Request.JWTRefreshRequest;
import com.bank.springbackend.communication.Response.JWTResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.NetBankingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final NetBankingRepository netBankingRepository;
    private final AccountRepository accountRepository;

    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    public JWTResponse login(JWTLoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUserId(),
                        request.getPassword()));

        User user = netBankingRepository.findUserByUserId(request.getUserId()).orElseThrow();
        Account account = accountRepository.findAccountByUser(user).orElseThrow();

        return authResponse(account);
    }

    public JWTResponse refresh(JWTRefreshRequest request) {
        String refreshToken = request.getRefreshToken();
        String userId = jwtService.extractUsername(refreshToken);

        if (userId != null) {
            User user = netBankingRepository.findUserByUserId(userId).orElseThrow();
            Account account = accountRepository.findAccountByUser(user).orElseThrow();

            if (jwtService.isTokenValid(refreshToken, account.getUser())) {
                return authRefreshResponse(account, refreshToken);
            }
        }

        return null;
    }

    private JWTResponse authResponse(Account account) {
        String jwtRefreshToken = jwtService.generateRefreshToken(account.getUser());

        return authRefreshResponse(account, jwtRefreshToken);
    }

    private JWTResponse authRefreshResponse(Account account, String refreshToken) {
        String jwtToken = jwtService.generateToken(account.getUser());

        return JWTResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .accountNumber(account.getAccountNumber())
                .userRoles(account.getUser().getRoles())
                .build();
    }

}
