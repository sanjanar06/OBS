package com.bank.springbackend.command;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.bank.springbackend.entity.Role;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.entity.Enum.RoleEnum;
import com.bank.springbackend.repository.NetBankingRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class StartupRunner implements CommandLineRunner {

        private final NetBankingRepository netBankingRepository;

        private final PasswordEncoder passwordEncoder;

        @Override
        public void run(String... args) throws Exception {
                Role adminRole = Role.builder()
                                .name(RoleEnum.ADMIN)
                                .build();

                Role userRole = Role.builder()
                                .name(RoleEnum.USER)
                                .build();

                User user = User.builder()
                                .loginPassword(passwordEncoder.encode("#120221"))
                                .roles(List.of(adminRole, userRole))
                                .build();

                netBankingRepository.save(user);
        }

}
