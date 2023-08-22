package com.bank.springbackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.Account;


public interface AccountRepository extends JpaRepository< Account, String > {
    List<Account> findAll();
    Optional<Account> findAccountByAccountNumber(String accountNumber);
}
