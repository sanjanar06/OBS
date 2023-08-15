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

    public UserProfile createProfile(UserProfile userProfile)
    {
        return userProfileRepository.save(userProfile);
    }

    public List<UserProfile> getAllUsers(){
		return userProfileRepository.findAll();
	}

}
