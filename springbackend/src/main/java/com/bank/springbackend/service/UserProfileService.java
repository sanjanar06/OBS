package com.bank.springbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.repository.UserProfileRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserProfileService {
    
    private final UserProfileRepository userProfileRepository; 

    public List<UserProfile> getAllUserProfiles(){
		return userProfileRepository.findAll();
	}

    public void deleteUserProfileById(Integer id) {
		userProfileRepository.deleteById(id);
	}

}
