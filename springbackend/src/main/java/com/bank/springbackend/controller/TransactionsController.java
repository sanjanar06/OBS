package com.bank.springbackend.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.entity.Transactions;
import com.bank.springbackend.service.TransactionsService;

import lombok.RequiredArgsConstructor;


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