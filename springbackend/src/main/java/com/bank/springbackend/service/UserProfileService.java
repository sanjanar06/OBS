package com.bank.springbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.UserProfileRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserProfileService {

	private final UserProfileRepository userProfileRepository;
	private final AccountRepository accountRepository;

	public List<UserProfile> getAllUserProfiles() {
		return userProfileRepository.findAll();
	}

	public UserProfile getUserProfile(String accountNumber) {
		Account account = accountRepository.findAccountByAccountNumber(accountNumber).orElseThrow();
		UserProfile profile = userProfileRepository.findByAccount(account).orElseThrow();
		return profile;

	}

	public void deleteUserProfileById(Integer id) {
		userProfileRepository.deleteById(id);
	}

}
