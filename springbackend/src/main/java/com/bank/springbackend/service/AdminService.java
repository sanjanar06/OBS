package com.bank.springbackend.service;

import org.springframework.stereotype.Service;

import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.Enum.AccountStatusEnum;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.repository.AccountRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AdminService {

    private final AccountRepository accountRepository;

    @Transactional
    public void approveAccount(String accountId) {
        Account account = accountRepository.findAccountByAccountNumber(accountId)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Account %s not found", accountId)));

        account.setStatus(AccountStatusEnum.ACCEPTED); // Update status to approved
        accountRepository.save(account);
    }

    @Transactional
    public void rejectAccount(String accountId) {
        Account account = accountRepository.findAccountByAccountNumber(accountId)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Account %s not found", accountId)));

        account.setStatus(AccountStatusEnum.REJECTED); // Update status to rejected
        accountRepository.save(account);
    }

}
