package com.bank.springbackend.communication.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BeneficiaryRequest {
    
    private String senderAccount;
    private String beneficiaryAccount;
    private String beneficiaryName;
    private String beneficiaryNickName;

}
