package com.bank.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.User;

public interface NetBankingRepository extends JpaRepository<User, Integer> {
    
}
