package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.entity.User;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.service.UserProfileService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/userProfile")
public class UerProfileController {
    
    private final UserProfileService userProfileService;

    // RESTful API method
    @PostMapping("/addProfile")
    public UserProfile addUser(@RequestBody UserProfile userProfile) {
		  return userProfileService.createProfile(userProfile);
    }

    @GetMapping("/profiles")
    public List<UserProfile> findAllUserProfiles(){
		return userProfileService.getAllUsers();
	}

}
