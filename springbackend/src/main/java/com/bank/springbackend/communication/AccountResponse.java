package com.bank.springbackend.communication;

import com.bank.springbackend.entity.AccountTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AccountResponse {
    
    private int accountNumber;
    private String accountName;
    private AccountTypeEnum accountType;
    private Double balance;

}
