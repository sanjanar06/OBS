package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bank.springbackend.communication.RegisterRequest;
import com.bank.springbackend.communication.RegisterResponse;
import com.bank.springbackend.service.TransactionsService;

import lombok.RequiredArgsConstructor;

import com.bank.springbackend.entity.Transactions;


@RestController
@RequiredArgsConstructor
@RequestMapping("/transaction")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionsController {

	private final TransactionsService transactionService;

    @PostMapping("/create")
    public Transactions createTransaction(@RequestBody Transactions transaction){
        return transactionService.createTransaction(transaction);
         
    }

    @GetMapping("/view")
    public List<Transactions> readTransactions() {
        return transactionService.getTransactions();
    }
    @GetMapping("/view/{date}")
    public List<Transactions> searchByDate(@PathVariable("date") LocalDate date){
        return transactionService.getByDate(date);
    }
    @GetMapping("/view/between-dates")
    public List<Transactions> getTransactionsBetweenDates(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate
    ) {
        return transactionService.getByDateRange(startDate, endDate);
    }
}