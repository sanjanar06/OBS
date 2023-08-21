package com.bank.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.springbackend.entity.Beneficiary;

public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Integer> {
    
}
