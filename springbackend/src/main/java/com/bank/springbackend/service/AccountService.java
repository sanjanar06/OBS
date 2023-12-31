package com.bank.springbackend.service;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.AccountRequest;
import com.bank.springbackend.communication.Request.UserDetailsRequest;
import com.bank.springbackend.communication.Response.AccountResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.entity.Enum.AccountStatusEnum;
import com.bank.springbackend.entity.Enum.AccountTypeEnum;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.UserProfileRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;
    private final UserProfileRepository userProfileRepository;
    private final SecureRandom secureRandom = new SecureRandom();

    public Account createAccount(UserDetailsRequest accountRequest) {

        long randomValue = (long) (secureRandom.nextDouble() * 1000000000000L);
        String accountNumber = String.format("%012d", randomValue);

        Account account = Account.builder()
                .accountNumber(accountNumber)
                .accountType(AccountTypeEnum.SAVINGS)
                .accountBalance(2500.0)
                .status(AccountStatusEnum.PENDING)
                .build();
        UserProfile userProfile = UserProfile.builder()
                .title(accountRequest.getTitle())
                .firstName(accountRequest.getFirstName())
                .middleName(accountRequest.getMiddleName())
                .lastName(accountRequest.getLastName())
                .emailID(accountRequest.getEmailID())
                .fatherName(accountRequest.getFatherName())
                .motherName(accountRequest.getMotherName())
                .aadhaarNo(accountRequest.getAadharNo())
                .dob(accountRequest.getDob())
                .address(accountRequest.getAddress())
                .occupationType(accountRequest.getOccupationType())
                .grossAnnualIncome(accountRequest.getGrossAnnualIncome())
                .build();

        userProfileRepository.save(userProfile);
        account.setUserProfile(userProfile);
        accountRepository.save(account);
        return account;

    }

    public AccountResponse getAccountByAccountNumber(String accountNumber) {

        Account account = accountRepository.findAccountByAccountNumber(accountNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found!"));

        return AccountResponse.builder()
                .accountName(account.getUserProfile().getFirstName())
                .accountNumber(account.getAccountNumber())
                .accountType(account.getAccountType())
                .balance(account.getAccountBalance())
                .status(account.getStatus())
                .build();

    }

    public AccountResponse viewAccountBalance(String accountNumber) {
        Account account = accountRepository.findAccountByAccountNumber(accountNumber).orElseThrow();

        return AccountResponse.builder()
                .balance(account.getAccountBalance())
                .build();

    }

    public List<AccountResponse> getAccounts() {
        List<Account> accounts = accountRepository.findAll();
        List<AccountResponse> accountResponses = new ArrayList<>();

        for (Account account : accounts) {
            AccountResponse accountResponse = AccountResponse.builder()
                    .accountName(account.getUserProfile().getFirstName())
                    .accountNumber(account.getAccountNumber())
                    .accountType(account.getAccountType())
                    .balance(account.getAccountBalance())
                    .status(account.getStatus())
                    .build();

            accountResponses.add(accountResponse);
        }

        return accountResponses;
    }

    @Transactional
    public void updateAccount(AccountRequest request) {
        Account account = accountRepository.findAccountByAccountNumber(request.getAccountNumber())
                .orElseThrow(() -> new ResourceNotFoundException(
                        String.format("Account %s not found", request.getAccountNumber())));

        account.setStatus(AccountStatusEnum.valueOf(request.getStatus())); // Status udated
        accountRepository.save(account);
    }

}
