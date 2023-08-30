package com.bank.springbackend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.bank.springbackend.controller.AdminController;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.repository.AccountRepository;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class AdminControllerTest {

    @Autowired
	public AdminController adminController;
    
	@MockBean
	public AccountRepository accountRepository;
    @Test
	void getAllAcounts() {
		// Mock database
		when(adminController.allAccounts())
		.thenReturn(Stream.of(new Account(), new Account()).collect(Collectors.toList()));

		// Assertion
		assertEquals(2, accountRepository.findAll().size());
	}
    
}
