package com.bank.springbackend;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;

import com.bank.springbackend.communication.Request.UserDetailsRequest;
import com.bank.springbackend.communication.Response.AccountResponse;
import com.bank.springbackend.controller.AccountController;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.service.AccountService;

@SpringBootTest
// @RunWith(SpringRunner.class)
@ExtendWith(SpringExtension.class)
// @WebMvcTest
public class AccountControllerTest {
    // @Autowired
    // private MockMvc mvc;
    @Autowired
    private AccountController accountController;
    @MockBean
    private AccountService accountService;
    @Test
    void viewAccountTest()
    {
        String accnum = "654356";
        // UUID emplyeeID = UUID.randonUUID();
        when(accountService.getAccountByAccountNumber(accnum))
        .thenReturn(new AccountResponse());
        AccountResponse result = accountController.viewAccount(accnum);
        assertNotNull(result);
    }
    
    @Test
    void viewAccountBalance()
    {
        String accnum = "6543566567";
        // UUID emplyeeID = UUID.randonUUID();
        when(accountService.getAccountByAccountNumber(accnum))
        .thenReturn(new AccountResponse());
        AccountResponse result = accountController.viewAccount(accnum);
        assertNotNull(result);
    }

    // @Test
    // void createAccount() 
    // {
    //     String accnum = "6543566567";
    //     // UUID emplyeeID = UUID.randonUUID();
    //     UserDetailsRequest userDetailsRequest = new UserDetailsRequest();
    //     when(accountService.createAccount(userDetailsRequest))
    //     .thenReturn(new Account());
    //     AccountResponse result = accountController.viewAccount(accnum);
    //     assertNotNull(result);
    // }
    

}
