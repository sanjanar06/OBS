package com.bank.springbackend.service;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.RegisterRequest;
import com.bank.springbackend.communication.RegisterResponse;
import com.bank.springbackend.entity.UserDetails;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.entity.ProfileStatusEnum;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.repository.UserDetailsRepository;
import com.bank.springbackend.repository.NetBankingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NetbankingService {

    private final NetBankingRepository netBankingRepository;
    private final UserDetailsRepository userDetailsRepository;

    public RegisterResponse register(RegisterRequest request) {
        // To verify if the user has an account
        UserDetails account = userDetailsRepository.findById(request.getAccountNumber()).orElseThrow();

        if(account.getStatus() == ProfileStatusEnum.PENDING) {
            throw new ResourceNotFoundException("LOL");
        }

        User user = User.builder()
            .account(account)
            .loginPassword(request.getLoginPassword())
            .transactionPassword(request.getTransPassword())
            .build();

        netBankingRepository.save(user);

        return new RegisterResponse(user.getUserId());
    }

    public boolean authenticateUser(RegisterRequest request)
	{
		User user = netBankingRepository.findById(request.getUserId()).orElseThrow();
    
		return user.getLoginPassword().equals(request.getLoginPassword());
        
	}
    
}
