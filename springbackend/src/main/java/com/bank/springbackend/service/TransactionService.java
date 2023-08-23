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
import com.bank.springbackend.exception.BalanceCheckException;
import com.bank.springbackend.exception.ResourceNotFoundException;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.TransactionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionService {

        private final TransactionRepository transactionsRepository;
        private final AccountRepository accountRepository;

        public Transaction fundTransfer(TransactionRequest request) {

                // Update balance in accounts
                Account toAccount = accountRepository.findAccountByAccountNumber(request.getToAccount()).orElseThrow(() -> new ResourceNotFoundException("Receiver Account does not exist!"));
                Account fromAccount = accountRepository.findAccountByAccountNumber(request.getFromAccount()).orElseThrow(() -> new ResourceNotFoundException("Sender Account not found!"));
                Double amount = request.getTransactionAmount();
                
                if (amount > fromAccount.getAccountBalance()){
                        throw new BalanceCheckException("Insufficient Balance");
                }
                
                Double  newBalanceTo= toAccount.getAccountBalance() + amount;
                toAccount.setAccountBalance(newBalanceTo);
                accountRepository.save(toAccount);
        
                Double newBalanceFrom = fromAccount.getAccountBalance() - amount;
                fromAccount.setAccountBalance(newBalanceFrom);
                accountRepository.save(fromAccount);
                

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
                List<Transaction> creditTransactions = transactionsRepository.findTransactionByToAccount(accountNumber);
                List<Transaction> debitTransactions = transactionsRepository
                                .findTransactionByFromAccount(accountNumber);

                List<Transaction> transactions = Stream.concat(creditTransactions.stream(), debitTransactions.stream())
                                .collect(Collectors.toList());

                return transactions;
        }

        public List<Transaction> getByDate(TransactionHistoryRequest request) {
                List<Transaction> creditTransactions = transactionsRepository.findByToAccountAndTransactionDate(
                                request.getAccount(), request.getQueryDate());
                List<Transaction> debitTransactions = transactionsRepository.findByFromAccountAndTransactionDate(
                                request.getAccount(), request.getQueryDate());

                List<Transaction> transactions = Stream.concat(creditTransactions.stream(), debitTransactions.stream())
                                .collect(Collectors.toList());

                return transactions;
        }

        public List<Transaction> getByDateRange(TransactionHistoryRequest request) {
                List<Transaction> creditTransactions = transactionsRepository.findByToAccountAndTransactionDateBetween(
                                request.getAccount(), request.getStartDate(), request.getEndDate());
                List<Transaction> debitTransactions = transactionsRepository.findByFromAccountAndTransactionDateBetween(
                                request.getAccount(), request.getStartDate(), request.getEndDate());

                List<Transaction> transactions = Stream.concat(creditTransactions.stream(), debitTransactions.stream())
                                .collect(Collectors.toList());

                return transactions;
        }
}
