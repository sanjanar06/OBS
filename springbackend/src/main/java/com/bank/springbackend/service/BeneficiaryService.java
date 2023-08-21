package com.bank.springbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.BeneficiaryRequest;
import com.bank.springbackend.communication.Response.BeneficiaryResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.Beneficiary;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.BeneficiaryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BeneficiaryService {

    private final BeneficiaryRepository beneficiaryRepository;
    private final AccountRepository accountRepository;

    public BeneficiaryResponse createBeneficiary(BeneficiaryRequest request)
    {
        Account account = accountRepository.findById(request.getSenderAccount()).orElseThrow();

        Beneficiary beneficiary = Beneficiary.builder()
            .beneficiaryName(request.getBeneficiaryName())
            .beneficiaryNickName(request.getBeneficiaryNickName())
            .beneficiaryAccount(request.getBeneficiaryAccount())
            .build();

        beneficiaryRepository.save(beneficiary);

        account.getBeneficiaries().add(beneficiary);
        accountRepository.save(account);

        return new BeneficiaryResponse(beneficiary.getBeneficiaryId());
    }

    public List<Beneficiary> getAllBeneficaries(String accountNumber)
    {
        Account account = accountRepository.findAccountByAccountNumber(accountNumber).orElseThrow();
        List<Beneficiary> beneficiaries = account.getBeneficiaries();
        return beneficiaries;
    }
}
