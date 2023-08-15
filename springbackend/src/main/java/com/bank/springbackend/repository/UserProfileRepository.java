package com.bank.springbackend.repository;

// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.UserProfile;

public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {
    
    // boolean findByAccountNumber(String accountNo);
}
