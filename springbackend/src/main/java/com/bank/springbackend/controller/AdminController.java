package com.bank.springbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.service.AdminService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    private final AdminService adminService;

    @PutMapping("/accept/{accountNumber}")
    public ResponseEntity<String> approveAccount(@PathVariable String accountNumber) {
        adminService.approveAccount(accountNumber);
        return ResponseEntity.ok("Account approved successfully.");
    }

    @PutMapping("/reject/{accountNumber}")
    public ResponseEntity<String> rejectAccount(@PathVariable String accountNumber) {
        adminService.rejectAccount(accountNumber);
        return ResponseEntity.ok("Account rejected");
    }

}
