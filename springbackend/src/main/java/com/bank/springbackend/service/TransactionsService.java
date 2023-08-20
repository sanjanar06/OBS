package com.bank.springbackend.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.entity.Transactions;
import com.bank.springbackend.repository.TransactionsRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionsService {

    private final TransactionsRepository transactionsRepository;

    public Transactions createTransaction(Transactions transaction){
        return transactionsRepository.save(transaction);
    }
    public List<Transactions> getTransactions() {
        return transactionsRepository.findAll();
    }

    public  List<Transactions> getByDate(LocalDate date){
        return transactionsRepository.findByTransactionDate(date);
    }

    public  List<Transactions> getByDateRange(LocalDate startDate, LocalDate endDate){
        return transactionsRepository.findByTransactionDateBetween(startDate, endDate);
    }
}

