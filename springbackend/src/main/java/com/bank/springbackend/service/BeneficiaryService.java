package com.bank.springbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.BeneficiaryRequest;
import com.bank.springbackend.communication.Response.BeneficiaryResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.Beneficiary;
import com.bank.springbackend.exception.BeneficiaryAlreadyExists;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.BeneficiaryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BeneficiaryService {

    private final BeneficiaryRepository beneficiaryRepository;
    private final AccountRepository accountRepository;

    public BeneficiaryResponse createBeneficiary(BeneficiaryRequest request) {
        Account account = accountRepository.findById(request.getSenderAccount())
                .orElseThrow(() -> new ResourceNotFoundException("Account not found"));

        // TO check if the beneficiary already exists

        Beneficiary check = beneficiaryRepository
                .findBeneficiaryBySenderAccountAndBeneficiaryAccount(account, request.getBeneficiaryAccount())
                .orElse(null);

        if (check != null) {
            throw new BeneficiaryAlreadyExists(String.format("Beneficiary Account Number %s Already Exists!",
                    check.getBeneficiaryAccount()));
        }

        Beneficiary beneficiary = Beneficiary.builder()
                .beneficiaryName(request.getBeneficiaryName())
                .beneficiaryNickName(request.getBeneficiaryNickName())
                .beneficiaryAccount(request.getBeneficiaryAccount())
                .senderAccount(account)
                .build();

        beneficiaryRepository.save(beneficiary);

        account.getBeneficiaries().add(beneficiary);
        accountRepository.save(account);

        return new BeneficiaryResponse(beneficiary.getBeneficiaryId());
    }

    public List<Beneficiary> getAllBeneficaries(String accountNumber) {
        Account account = accountRepository.findAccountByAccountNumber(accountNumber).orElseThrow();
        List<Beneficiary> beneficiaries = account.getBeneficiaries();
        return beneficiaries;
    }

    public Beneficiary getBeneficiary(String senderAccount, String beneficiaryAccount) {
        Account account = accountRepository.findAccountByAccountNumber(senderAccount).orElseThrow();
        return beneficiaryRepository
                .findBeneficiaryBySenderAccountAndBeneficiaryAccount(account, beneficiaryAccount)
                .orElseThrow();
    }

}
