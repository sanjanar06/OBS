package com.bank.springbackend.service;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.Request.TransactionHistoryRequest;
import com.bank.springbackend.communication.Request.TransactionRequest;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.Transaction;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.TransactionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionsRepository;
    private final AccountRepository accountRepository;

    public Transaction fundTransfer(TransactionRequest request){

        //Update balance in accounts
        Account toAccount = accountRepository.findAccountByAccountNumber(request.getToAccount()).orElse(null);
        Account fromAccount = accountRepository.findAccountByAccountNumber(request.getFromAccount()).orElse(null);

        if(toAccount!=null)
        {
            Double newBalance = toAccount.getAccountBalance() + request.getTransactionAmount();
            toAccount.setAccountBalance(newBalance);
            accountRepository.save(toAccount);
        }
        else if(fromAccount!=null)
        {
            Double newBalance = fromAccount.getAccountBalance() - request.getTransactionAmount();
            fromAccount.setAccountBalance(newBalance);
            accountRepository.save(fromAccount);
        }
        
        Transaction transaction = Transaction.builder()
            .transactionDate(new Date(System.currentTimeMillis()))
            .transactionAmount(request.getTransactionAmount())
            .transactionDesc(request.getTransactionDesc())
            .transactionType(request.getTransactionType())
            .toAccount(request.getToAccount())
            .fromAccount(request.getFromAccount())
            .build();

        return transactionsRepository.save(transaction);
    }
    public List<Transaction> getTransactionHistory(String accountNumber) {
        List<Transaction> creditTransactions = transactionsRepository.findByToAccount(accountNumber);
        List<Transaction> debitTransactions  = transactionsRepository.findByFromAccount(accountNumber);

        List<Transaction> transactions = Stream.concat(creditTransactions.stream(),debitTransactions.stream()).collect(Collectors.toList());

        return transactions;
    }

    public  List<Transaction> getByDate(Date date){
        return transactionsRepository.findByTransactionDate(date);
    }

    public  List<Transaction> getByDateRange(TransactionHistoryRequest request){
        List<Transaction> creditTransactions = transactionsRepository.findByToAccountAndTransactionDateBetween(request.getAccount(),request.getStartDate(),request.getEndDate());
        List<Transaction> debitTransactions = transactionsRepository.findByFromAccountAndTransactionDateBetween(request.getAccount(),request.getStartDate(),request.getEndDate());

        List<Transaction> transactions = Stream.concat(creditTransactions.stream(),debitTransactions.stream()).collect(Collectors.toList());

        return transactions;
    }
}

