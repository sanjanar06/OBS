package com.bank.springbackend.entity;

import java.util.List;

import com.bank.springbackend.entity.Enum.AccountStatusEnum;
import com.bank.springbackend.entity.Enum.AccountTypeEnum;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String accountNumber;

    private Double accountBalance; 

    @Enumerated(EnumType.STRING)
    private AccountTypeEnum accountType;

    @Enumerated(EnumType.STRING)
    private AccountStatusEnum status;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = true)
    private User user;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private UserProfile userProfile;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true , fetch = FetchType.LAZY)
    private List<Beneficiary> beneficiaries;


}
