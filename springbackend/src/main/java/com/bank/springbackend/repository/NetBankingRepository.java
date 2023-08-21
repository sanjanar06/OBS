package com.bank.springbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.User;


public interface NetBankingRepository extends JpaRepository<User, String> {

    Optional<User> findUserByUserId(String userId);
}
