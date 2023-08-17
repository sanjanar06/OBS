package com.bank.springbackend.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.AccountResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.UserProfileRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final UserProfileRepository userProfileRepository;

    public AccountResponse getAccountByAccountNumber(Integer accountNumber)
    {
        UserProfile userProfile = userProfileRepository.findById(accountNumber).orElseThrow();
    

        return AccountResponse.builder()
            .accountName(userProfile.getFirstName())
            .accountNumber(userProfile.getAccountNumber())
            .accountType(userProfile.getAccount().getAccountType())
            .balance(userProfile.getAccount().getBalance())
            .build();

    }


}
