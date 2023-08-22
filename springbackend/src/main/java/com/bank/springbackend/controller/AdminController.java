package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bank.springbackend.communication.Response.AccountResponse;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.service.AccountService;
import com.bank.springbackend.service.AdminService;
import com.bank.springbackend.entity.Account;
import org.springframework.web.bind.annotation.RequestBody;

import com.bank.springbackend.communication.Request.AdminRequest;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    private final AdminService adminService;
    private final AccountRepository accountRepository;

    @GetMapping("/view")
    public List<Account> allAccounts(){
        return accountRepository.findAll();
    }

    @PostMapping("/accept")
    public ResponseEntity<String> approveAccount(@RequestBody AdminRequest request) {
        adminService.approveAccount(request.getAccountNumber());
        return ResponseEntity.ok("Account approved successfully.");
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteAccount(@RequestBody AdminRequest request) {
        adminService.rejectAccount(request.getAccountNumber());
        return ResponseEntity.ok("Account rejected successfully.");
    }
}
