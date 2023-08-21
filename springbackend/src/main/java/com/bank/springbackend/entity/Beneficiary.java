package com.bank.springbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Beneficiary {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer beneficiaryId;

    private String beneficiaryAccount;

    private String beneficiaryName;

    @Column(nullable = true)
    private String beneficiaryNickName;
    
    // @ManyToOne(fetch = FetchType.LAZY)
    // private Account senderAccount;

}
