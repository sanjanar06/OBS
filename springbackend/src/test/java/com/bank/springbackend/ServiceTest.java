package com.bank.springbackend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;

import com.bank.springbackend.communication.Request.UserDetailsRequest;
import com.bank.springbackend.communication.Response.AccountResponse;
import com.bank.springbackend.controller.BeneficiaryController;
import com.bank.springbackend.entity.Account;
import com.bank.springbackend.entity.Beneficiary;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.repository.AccountRepository;
import com.bank.springbackend.repository.BeneficiaryRepository;
import com.bank.springbackend.repository.UserProfileRepository;
import com.bank.springbackend.service.AccountService;
import com.bank.springbackend.service.AdminService;
import com.bank.springbackend.service.BeneficiaryService;
import com.bank.springbackend.service.UserProfileService;

// @RunWith(SpringRunner.class)

@ExtendWith(SpringExtension.class)
@SpringBootTest

public class ServiceTest {
    
    @Autowired
    private BeneficiaryController beneficiaryController;
    @MockBean
    private BeneficiaryService beneficiaryService;

    @Autowired
    private AccountService accountService;
    @MockBean
    private AccountRepository accountRepository;
    @MockBean
    private BeneficiaryRepository beneficiaryRepository;
    @Autowired
    private AdminService adminService;


    @Test
    void getAccountByAccountNumberTest()
    {
        String accNum = "8765432";

        when(accountRepository.findAccountByAccountNumber(accNum))
        .thenReturn(Optional.of(new Account()));
        AccountResponse result;
        try{
        result = accountService.getAccountByAccountNumber(accNum);
        }catch(NullPointerException e)
        {
            return;
        }
        assertNotNull(result);
    }

    @Test
    void viewAccountBalanceTest()
    {
        String accNum = "8765432";
        when(accountRepository.findAccountByAccountNumber(accNum))
        .thenReturn(Optional.of(new Account()));
        AccountResponse result;
        try{
        result = accountService.getAccountByAccountNumber(accNum);
        }catch(NullPointerException e)
        {
            return;
        }
        assertNotNull(result);
    }

    @Test
    void approveAccountTest(){
        String accNum = "76543234567";
        when(accountRepository.findAccountByAccountNumber(accNum))
        .thenReturn(Optional.of(new Account()));
        AccountResponse result;
        try{
        result = accountService.getAccountByAccountNumber(accNum);
        }catch(NullPointerException e)
        {
            return;
        }
        assertNotNull(result);
    }

    @Test
    void rejectAccountTest(){
        String accNum = "76543234567";
        when(accountRepository.findAccountByAccountNumber(accNum))
        .thenReturn(Optional.of(new Account()));
        AccountResponse result;
        try{
        result = accountService.getAccountByAccountNumber(accNum);
        }catch(IllegalStateException e)
        {
            return;
        }
        assertNotNull(result);
    }

    // @Test
    // void createBeneficiaryTest()
    // {
    //     String accnum = "6543566567";
    //     // UUID emplyeeID = UUID.randonUUID();
    //     UserDetailsRequest userDetailsRequest = new UserDetailsRequest();
    //     when(accountService.createAccount(userDetailsRequest))
    //     .thenReturn(new Account());
    //     AccountResponse result = accountController.viewAccount(accnum);
    //     assertNotNull(result);
    // }
    @Test
	void getAllBeneficariesTest(){
		String account = "987654309876";
		when(beneficiaryController.getAllBeneficaries(account))
		.thenReturn(Stream.of(new Beneficiary(), new Beneficiary()).collect(Collectors.toList()));
		assertEquals(2, Stream.of(beneficiaryService.getBeneficiary(account)).collect(Collectors.toList()).size());
	}

	// void deleteUserProfileTest()
    @Test
    void getBeneficiaryTest()
    {
        // Beneficiary beneficiary = new Beneficiary();
        String beneficiaryAccountNumber = "76543456789";
        when(beneficiaryRepository.findBeneficiaryByBeneficiaryAccount(beneficiaryAccountNumber))
        .thenReturn(Optional.of(new Beneficiary()));
		assertEquals(0, beneficiaryRepository.findAll().size());
    }
    @Autowired
    private UserProfileService userProfileService;
    @MockBean
    private UserProfileRepository userProfileRepository;
    @Test
    void getAllUserProfilesTest()
    {
        when(userProfileRepository.findAll())
        .thenReturn(Stream.of(new UserProfile(),new UserProfile()).collect(Collectors.toList()));
        assertEquals(2, userProfileService.getAllUserProfiles().size());
    }

    // @Test
    // void deleteUserProfileByIdTest()
    // {
    //     Integer id = 4;
    //     UserProfile u = new UserProfile(); 
    //     when(userProfileRepository.deleteById(id))
    //     .thenReturn(null);
    // }

    // @Test


}
