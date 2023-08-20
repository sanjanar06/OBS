package com.bank.springbackend.communication.Request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class TransactionRequest {

    private String transactionType;
    private String transactionDesc;
    private double transactionAmount;
    private String toAccount;
    private String fromAccount;
    private Date startDate;
    private Date endDate;
    
}
