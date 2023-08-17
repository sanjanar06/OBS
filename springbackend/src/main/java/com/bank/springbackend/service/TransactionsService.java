package com.bank.springbackend.service;

import java.util.List;
import com.bank.springbackend.communication.RegisterRequest;
import com.bank.springbackend.communication.RegisterResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.bank.springbackend.communication.TransactionRequest;
import com.bank.springbackend.entity.Transactions;
import com.bank.springbackend.repository.TransactionsRepository;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
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
}

