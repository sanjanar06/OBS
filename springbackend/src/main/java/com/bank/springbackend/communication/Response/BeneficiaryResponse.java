package com.bank.springbackend.communication.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class BeneficiaryResponse {
    
    private Integer beneficiaryId;
}
