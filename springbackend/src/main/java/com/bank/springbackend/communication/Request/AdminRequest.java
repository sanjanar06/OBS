package com.bank.springbackend.communication.Request;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AdminRequest {

    private String accountNumber;
    
    
}
