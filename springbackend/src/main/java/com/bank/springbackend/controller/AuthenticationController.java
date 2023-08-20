package com.bank.springbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.Request.JWTLoginRequest;
import com.bank.springbackend.communication.Request.JWTRefreshRequest;
import com.bank.springbackend.communication.Response.JWTResponse;
import com.bank.springbackend.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@CrossOrigin
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/login")
    public ResponseEntity<JWTResponse> login(
        @RequestBody JWTLoginRequest request
    ) {
        return ResponseEntity.ok(service.login(request));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JWTResponse> refresh(
        @RequestBody JWTRefreshRequest request
    ) {
        return ResponseEntity.ok(service.refresh(request));
    }
    
}
