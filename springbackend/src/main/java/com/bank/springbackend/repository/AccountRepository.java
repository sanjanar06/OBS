package com.bank.springbackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.User;

public interface AccountRepository extends JpaRepository<Account, String> {

    List<Account> findAll();

    Optional<Account> findAccountByAccountNumber(String accountNumber);

    Optional<Account> findAccountByUser(User user);
}
