package com.bank.springbackend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.Request.RegisterRequest;
import com.bank.springbackend.communication.Response.RegisterResponse;
import com.bank.springbackend.service.NetbankingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class NetBankingController {

    private final NetbankingService netbankingService;

    @PostMapping("/register")
    public RegisterResponse register(@RequestBody RegisterRequest request) {
		return netbankingService.register(request);
    }

    @GetMapping("/view/{userId}")
    public RegisterResponse getUser(@PathVariable String userId)
    {
      return netbankingService.getUser(userId);
    }

    @PutMapping("/update/{userId}")
    public RegisterResponse updatePassword(@RequestBody RegisterRequest request)
    {
      return netbankingService.updatePassword(request);
    }

}
