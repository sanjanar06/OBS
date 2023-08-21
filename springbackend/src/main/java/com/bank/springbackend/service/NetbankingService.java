package com.bank.springbackend.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.RegisterRequest;
import com.bank.springbackend.communication.Response.RegisterResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.entity.Enum.AccountStatusEnum;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.NetBankingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NetbankingService {

    private final NetBankingRepository netBankingRepository;
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterResponse register(RegisterRequest request) {
        // To verify if the user has an account
        Account account = accountRepository.findAccountByAccountNumber(request.getAccountNumber()).orElseThrow();

        if(account.getStatus() == AccountStatusEnum.PENDING) {
            throw new ResourceNotFoundException("Your account has not been approved yet!");
        }

        User user = User.builder()
            .loginPassword(passwordEncoder.encode(request.getLoginPassword()))
            .transactionPassword(request.getTransactionPassword())
            // .roles(List.of(roleRepository.findByName(RoleEnum.USER).orElseThrow()))
            .build();

        netBankingRepository.save(user);
        account.setUser(user);
        accountRepository.save(account);

        RegisterResponse res = RegisterResponse.builder()
            .userId(user.getUserId())
            .build();

        return res;
    }

    public RegisterResponse getUser(String userId)
    {
        User user = netBankingRepository.findUserByUserId(userId).orElseThrow();
        RegisterResponse res = RegisterResponse.builder()
            .userId(user.getUserId())
            .build();

        return res;
    }

    public RegisterResponse updatePassword(RegisterRequest request)
    {
        User user = netBankingRepository.findUserByUserId(request.getUserId()).orElseThrow();
        user.setLoginPassword(request.getLoginPassword());
        netBankingRepository.save(user);

        RegisterResponse res = RegisterResponse.builder()
            .userId(user.getUserId())
            .loginPassword(user.getLoginPassword())
            .build();

        return res;
    }


    
}
