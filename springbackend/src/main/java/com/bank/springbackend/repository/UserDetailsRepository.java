package com.bank.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.UserDetails;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {
    
}
