package com.bank.springbackend.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.RegisterRequest;
import com.bank.springbackend.communication.RegisterResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.AccountTypeEnum;
import com.bank.springbackend.entity.ProfileStatusEnum;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.NetBankingRepository;
import com.bank.springbackend.repository.RoleRepository;
import com.bank.springbackend.repository.UserProfileRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NetbankingService {

    private final NetBankingRepository netBankingRepository;
    private final UserProfileRepository userProfileRepository;
    private final RoleRepository roleRepository;
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterResponse register(RegisterRequest request) {
        // To verify if the user has an userProfile
        UserProfile userProfile = userProfileRepository.findById(request.getAccountNumber()).orElseThrow();

        if(userProfile.getStatus() == ProfileStatusEnum.PENDING) {
            throw new ResourceNotFoundException("Your account has not been approved yet!");
        }

        User user = User.builder()
            .loginPassword(passwordEncoder.encode(request.getLoginPassword()))
            .transactionPassword(request.getTransactionPassword())
            // .roles(List.of(roleRepository.findByName(RoleEnum.USER).orElseThrow()))
            .build();

        Account account = Account.builder()
            // .userProfile(userProfile)
            .accountType(AccountTypeEnum.SAVINGS)
            .balance(2500.0)
            .build();

        netBankingRepository.save(user);
        accountRepository.save(account);
        userProfile.setAccount(account);
        userProfile.setUser(user);

        userProfileRepository.save(userProfile);

        return new RegisterResponse(user.getUserId());
    }

    public boolean authenticateUser(RegisterRequest request)
	{
		User user = netBankingRepository.findById(request.getUserId()).orElseThrow();
    
		return user.getLoginPassword().equals(request.getLoginPassword());
        
	}
    
}
