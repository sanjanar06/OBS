package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.UserDetailsRequest;
import com.bank.springbackend.entity.UserDetails;
import com.bank.springbackend.service.UserDetailsService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:3000")
public class UserDetailsController {
    
    private final UserDetailsService userDetailsService;

    // RESTful API method
    @PostMapping("/addProfile")
    public UserDetails addUserProfile(@RequestBody UserDetailsRequest accountRequest) {
		  return userDetailsService.createProfile(accountRequest);
    }

    // Admin :Fetch all account opening forms
    @GetMapping("/profiles")
    public List<UserDetails> findAllUserProfiles(){
		  return userDetailsService.getAllUsers();
    }

    // Admin :Delete rejected account opening forms
    @DeleteMapping("/{id}")
    public String deleteUserProfile(@PathVariable("id") Integer accountId)
    {
        userDetailsService.deleteUserProfileById(accountId);
        return "Deleted Profile Successfully";
    }


}
