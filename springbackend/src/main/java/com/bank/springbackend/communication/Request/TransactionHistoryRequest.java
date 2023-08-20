package com.bank.springbackend.communication.Request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class TransactionHistoryRequest {

    private String account;
    private Date startDate;
    private Date endDate;
    
}
