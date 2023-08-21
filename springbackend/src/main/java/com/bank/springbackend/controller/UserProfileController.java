package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.service.UserProfileService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/userProfile")
@CrossOrigin(origins = "http://localhost:3000")
public class UserProfileController {
    
    private final UserProfileService userProfileService;

    // Admin :Fetch all account opening forms
    @GetMapping("/view")
    public List<UserProfile> findAllUserProfiles(){
		  return userProfileService.getAllUserProfiles();
    }

    // Admin :Delete rejected account opening forms
    @DeleteMapping("/delete/{id}")
    public String deleteUserProfile(@PathVariable("id") Integer accountId)
    {
        userProfileService.deleteUserProfileById(accountId);
        return "Deleted Profile Successfully";
    }


}
