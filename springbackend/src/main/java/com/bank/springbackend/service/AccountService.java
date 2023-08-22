package com.bank.springbackend.service;

import java.security.SecureRandom;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.UserDetailsRequest;
import com.bank.springbackend.communication.Response.AccountResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.entity.Enum.AccountStatusEnum;
import com.bank.springbackend.entity.Enum.AccountTypeEnum;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.UserProfileRepository;

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

        Account account = accountRepository.findAccountByAccountNumber(accountNumber).orElseThrow();

        return AccountResponse.builder()
                .accountName(account.getUserProfile().getFirstName())
                .accountNumber(account.getAccountNumber())
                .accountType(account.getAccountType())
                .balance(account.getAccountBalance())
                .build();

    }

    public AccountResponse viewAccountBalance(String accountNumber ){
        Account account = accountRepository.findAccountByAccountNumber(accountNumber).orElseThrow();

        return AccountResponse.builder()
                .balance(account.getAccountBalance())
                .build();
        
    }

}
