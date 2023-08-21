package com.bank.springbackend.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByTransactionDate(Date date);
    List<Transaction> findByToAccountAndTransactionDateBetween(String Account,Date startDate, Date endDate);
    List<Transaction> findByFromAccountAndTransactionDateBetween(String Account,Date startDate, Date endDate);
    List<Transaction> findByToAccount(String toAccount);
    List<Transaction> findByFromAccount(String fromAccount);
}
