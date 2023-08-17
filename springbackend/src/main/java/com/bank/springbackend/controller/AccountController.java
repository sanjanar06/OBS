package com.bank.springbackend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.AccountResponse;
import com.bank.springbackend.service.AccountService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    
    private final AccountService accountService;

    // User : View account details
    @GetMapping("/viewAccount/{accountNumber}")
    public AccountResponse viewAccount(@PathVariable int accountNumber ){
        return accountService.getAccountByAccountNumber(accountNumber);
    }

 
}
