package com.bank.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.User;
public interface UserRepository extends JpaRepository<User, Long> {
	
}
