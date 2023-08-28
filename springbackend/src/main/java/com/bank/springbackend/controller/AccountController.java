package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.Request.AccountRequest;
import com.bank.springbackend.communication.Request.UserDetailsRequest;
import com.bank.springbackend.communication.Response.AccountResponse;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.service.AccountService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {

    private final AccountService accountService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/view/all")
    public List<AccountResponse> viewAccounts() {
        return accountService.getAccounts();
    }

    // User : View account details
    @GetMapping("/view/{accountNumber}")
    public AccountResponse viewAccountByAccountNumber(@PathVariable String accountNumber) {
        return accountService.getAccountByAccountNumber(accountNumber);
    }

    @GetMapping("/view/balance/{accountNumber}")
    public AccountResponse viewAccountBalance(@PathVariable String accountNumber) {
        return accountService.getAccountByAccountNumber(accountNumber);
    }

    @PostMapping("/create")
    public Account createAccount(@RequestBody UserDetailsRequest request) {
        return accountService.createAccount(request);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update/status")
    public ResponseEntity<String> updateAccount(@RequestBody AccountRequest request) {
        accountService.updateAccount(request);
        return ResponseEntity.ok("Status updated");
    }

}
