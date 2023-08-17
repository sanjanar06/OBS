package com.bank.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.Account;

public interface AccountRepository extends JpaRepository< Account, Integer > {
    
}
