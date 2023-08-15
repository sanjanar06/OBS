package com.bank.springbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.RegisterRequest;
import com.bank.springbackend.communication.RegisterResponse;
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

    @PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody RegisterRequest request)
	{
		if(netbankingService.authenticateUser(request))
			return ResponseEntity.ok("Login successful");
		else
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials!");
	}
}
