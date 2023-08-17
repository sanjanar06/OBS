package com.bank.springbackend.entity;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users_profile")
public class UserProfile {

    @Id
    @Column(name="accountNumber", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountNumber;

    @Column(name = "title", length= 4)
    private String title;

    private String firstName;
    private String middleName;
    private String lastName;
    private String emailID;
    private String fatherName;
    private String motherName;
    private String aadharNo;
    private LocalDate dob;
    private String address;
    private String occupationType;
    private Double grossAnnualIncome;
    private ProfileStatusEnum status;

    @OneToOne(optional = true, cascade = CascadeType.ALL)
    private User user;

    @OneToOne(optional = true, cascade = CascadeType.ALL )
    private Account account;

}
