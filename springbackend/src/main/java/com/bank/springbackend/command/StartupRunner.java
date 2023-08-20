package com.bank.springbackend.command;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.bank.springbackend.entity.Role;
import com.bank.springbackend.entity.RoleEnum;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.repository.NetBankingRepository;
import com.bank.springbackend.repository.RoleRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class StartupRunner implements CommandLineRunner {

    private final NetBankingRepository netBankingRepository;
    private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;

    @Value("${bank.springbackend.superUser}")
    private Integer superUser;

    @Value("${bank.springbackend.superPass}")
    private String superUserPass;
    
    @Override
    public void run(String... args) throws Exception {
        Role adminRole = new Role(RoleEnum.ADMIN);
        roleRepository.save(adminRole);

        Role userRole = new Role(RoleEnum.USER);
        roleRepository.save(userRole);

        User user = new User();
        user.setUserId(superUser);
        user.setLoginPassword(passwordEncoder.encode(superUserPass));
        user.setRoles(List.of(adminRole, userRole));
        netBankingRepository.save(user);
    }
    
}
