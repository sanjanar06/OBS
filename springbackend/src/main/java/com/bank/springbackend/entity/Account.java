package com.bank.springbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account {
    @Id
    @Column(name = "accountId", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer accountId;

    private AccountTypeEnum accountType;
    private Double balance; 

    @OneToOne(mappedBy = "account")
    private UserProfile userProfile;
}
