package com.bank.springbackend.communication.Response;

import java.util.List;

import com.bank.springbackend.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JWTResponse {

    private String accessToken;
    private String refreshToken;
    private String accountNumber;
    private List<Role> userRoles;
}
