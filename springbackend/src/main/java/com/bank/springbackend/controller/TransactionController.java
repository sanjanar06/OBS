package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.Request.TransactionHistoryRequest;
import com.bank.springbackend.communication.Request.TransactionRequest;
import com.bank.springbackend.entity.Transaction;
import com.bank.springbackend.service.TransactionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/transaction")
@CrossOrigin
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/create")
    public Transaction createTransaction(@RequestBody TransactionRequest transaction) {
        return transactionService.fundTransfer(transaction);

    }

    @GetMapping("/view/{accountNumber}")
    public List<Transaction> readTransactionHistory(@PathVariable String accountNumber) {
        return transactionService.getTransactionHistory(accountNumber);
    }

    @GetMapping("/view/date/{date}")
    public List<Transaction> searchByDate(@RequestBody TransactionHistoryRequest request) {
        return transactionService.getByDate(request);
    }

    @GetMapping("/view/between-dates")
    public List<Transaction> getTransactionsBetweenDates(@RequestBody TransactionHistoryRequest request) {
        return transactionService.getByDateRange(request);
    }
}