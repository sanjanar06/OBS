package com.bank.springbackend.communication.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class RegisterRequest {
    
    private String accountNumber;
    private String userId;
    private String loginPassword;
    private String transactionPassword;
    
}
