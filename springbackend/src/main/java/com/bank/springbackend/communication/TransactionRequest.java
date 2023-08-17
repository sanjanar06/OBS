package com.bank.springbackend.communication;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class TransactionRequest {

    private LocalDate transactionDate;
    private String transactionType;
    private String transactionDesc;
    private double transactionAmount;
    
}
