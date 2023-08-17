package com.bank.springbackend.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bank.springbackend.entity.Transactions;

public interface TransactionsRepository extends JpaRepository<Transactions, Long> {
    List<Transactions> findByTransactionDate(LocalDate date);
}
