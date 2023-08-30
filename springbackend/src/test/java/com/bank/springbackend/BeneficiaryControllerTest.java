package com.bank.springbackend;

import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.bank.springbackend.entity.Beneficiary;
import com.bank.springbackend.service.AccountService;
import com.bank.springbackend.service.BeneficiaryService;

@SpringBootTest
// @RunWith(SpringRunner.class)
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
public class BeneficiaryControllerTest {

    BeneficiaryService beneficiaryService = Mockito.mock(BeneficiaryService.class);

    @Autowired
	public MockMvc mockMvc;

    @Test
	public void getAllBeneficariesTest() throws Exception {
		
	// 	String acc_no = "1234567890";
	// 	// Transaction transaction = new Transaction();
    //     Beneficiary beneficiary = new Beneficiary();
	// 	List<Beneficiary> beneficiaries = Arrays.asList(beneficiary);
		
	// 	when(beneficiaryService.getAllBeneficaries(acc_no))
	// 	.thenReturn(beneficiary);
		
	// 	mockMvc.perform(get("http://localhost:8080/api/v1/transactions"))
	// 	    .andExpect(status().isOk())
	// 	    .andExpect(jsonPath("$.[0].amount", is("360")));
	// }
    
}
