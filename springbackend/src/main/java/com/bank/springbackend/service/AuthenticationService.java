package com.bank.springbackend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.JWTLoginRequest;
import com.bank.springbackend.communication.Request.JWTRefreshRequest;
import com.bank.springbackend.communication.Response.JWTResponse;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.repository.NetBankingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final NetBankingRepository netBankingRepository;

    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    public JWTResponse login(JWTLoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUserId(),
                request.getPassword()
            )
        );

        User user = netBankingRepository.findUserByUserId(request.getUserId()).orElseThrow();
        
        return authResponse(user);
    }

    public JWTResponse refresh(JWTRefreshRequest request) {
        String refreshToken = request.getRefreshToken();
        String userId = jwtService.extractUsername(refreshToken);

        if (userId != null) {
            User user = netBankingRepository.findUserByUserId(userId).orElseThrow();

            if (jwtService.isTokenValid(refreshToken, user)) {
                return authRefreshResponse(user, refreshToken);
            }
        }

        return null;
    }

    private JWTResponse authResponse(User user) {
        String jwtRefreshToken = jwtService.generateRefreshToken(user);

        return authRefreshResponse(user, jwtRefreshToken);
    }

    private JWTResponse authRefreshResponse(User user, String refreshToken) {
        String jwtToken = jwtService.generateToken(user);

        return JWTResponse.builder()
            .accessToken(jwtToken)
            .refreshToken(refreshToken)
            .build();
    }

}
