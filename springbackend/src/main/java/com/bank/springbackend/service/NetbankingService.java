package com.bank.springbackend.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.RegisterRequest;
import com.bank.springbackend.communication.Response.RegisterResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.entity.Enum.RoleEnum;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.NetBankingRepository;
import com.bank.springbackend.repository.RoleRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NetbankingService {

        private final NetBankingRepository netBankingRepository;
        private final AccountRepository accountRepository;
        private final RoleRepository roleRepository;
        private final PasswordEncoder passwordEncoder;

        public RegisterResponse register(RegisterRequest request) {
                // To verify if the user has an account
                Account account = accountRepository.findAccountByAccountNumber(request.getAccountNumber()).orElseThrow(
                                () -> new ResourceNotFoundException("Your account has not been approved yet!"));

                User user = User.builder()
                                .loginPassword(passwordEncoder.encode(request.getLoginPassword()))
                                .transactionPassword(request.getTransactionPassword())
                                .roles(List.of(roleRepository.findByName(RoleEnum.USER)
                                                .orElseThrow(() -> new ResourceNotFoundException(
                                                                "Role repository empty"))))
                                .build();

                // netBankingRepository.save(user);
                account.setUser(user);
                accountRepository.save(account);

                RegisterResponse res = RegisterResponse.builder()
                                .userId(account.getUser().getUserId())
                                .build();

                return res;
        }

        public RegisterResponse getUser(String userId) {
                User user = netBankingRepository.findUserByUserId(userId)
                                .orElseThrow(() -> new ResourceNotFoundException(
                                                String.format("Account %s does not exist!", userId)));
                RegisterResponse res = RegisterResponse.builder()
                                .userId(user.getUserId())
                                .build();

                return res;
        }

        public RegisterResponse updatePassword(RegisterRequest request) {
                User user = netBankingRepository.findUserByUserId(request.getUserId()).orElseThrow(
                                () -> new ResourceNotFoundException("Your netbanking account does not exist!"));
                user.setLoginPassword(request.getLoginPassword());
                netBankingRepository.save(user);

                RegisterResponse res = RegisterResponse.builder()
                                .userId(user.getUserId())
                                .loginPassword(user.getLoginPassword())
                                .build();

                return res;
        }

}
