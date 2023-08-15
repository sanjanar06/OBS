package com.bank.springbackend.communication;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class RegisterRequest {
    
    private int accountNumber;
    private int userId;
    private String loginPassword;
    private String transPassword;
    
}
