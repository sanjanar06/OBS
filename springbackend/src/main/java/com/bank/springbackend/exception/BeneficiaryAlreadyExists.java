package com.bank.springbackend.exception;

public class BeneficiaryAlreadyExists extends RuntimeException{
    public BeneficiaryAlreadyExists(String message) {
        super(message);
    }
}
