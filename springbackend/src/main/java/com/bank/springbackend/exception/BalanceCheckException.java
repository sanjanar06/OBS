package com.bank.springbackend.exception;

public class BalanceCheckException extends RuntimeException{
    public BalanceCheckException(String message) {
        super(message);
    }
}
