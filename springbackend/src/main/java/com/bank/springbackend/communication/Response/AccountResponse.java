package com.bank.springbackend.communication.Response;

import com.bank.springbackend.entity.Enum.AccountStatusEnum;
import com.bank.springbackend.entity.Enum.AccountTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AccountResponse {

    private String accountNumber;
    private String accountName;
    private AccountTypeEnum accountType;
    private Double balance;
    private AccountStatusEnum status;

}
