package com.bank.springbackend.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_profile")
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int profileId;

    @Column(name = "title", length = 4)
    private String title;

    @NotBlank
    private String firstName;

    @NotBlank
    private String middleName;

    @NotBlank
    private String lastName;

    @NotBlank
    private String emailID;

    @NotBlank
    private String fatherName;

    @NotBlank
    private String motherName;

    @NotBlank
    private String aadhaarNo;

    private LocalDate dob;

    @NotBlank
    private String address;

    @NotBlank
    private String occupationType;

    private Double grossAnnualIncome;

    @OneToOne(mappedBy = "userProfile")
    @JsonBackReference
    private Account account;

}
