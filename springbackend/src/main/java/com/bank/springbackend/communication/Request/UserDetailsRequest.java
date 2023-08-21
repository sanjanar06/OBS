package com.bank.springbackend.communication.Request;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserDetailsRequest {

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
    
}
