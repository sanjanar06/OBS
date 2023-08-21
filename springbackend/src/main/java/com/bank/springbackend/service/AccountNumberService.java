package com.bank.springbackend.service;

import java.security.SecureRandom;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountNumberService {

    private final SecureRandom secureRandom = new SecureRandom();

    public String generateAccountNumber() {
        long accountNumber = (long) (secureRandom.nextDouble() * 1000000000000L);
        return String.format("%012d", accountNumber);
    }
    
}
