package com.bank.springbackend;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
// import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.bank.springbackend.controller.TransactionController;
import com.bank.springbackend.entity.Transaction;
import com.bank.springbackend.service.TransactionService;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class TransactionControllerTest {
    @Autowired
    private TransactionController transactionController;

    @MockBean
    TransactionService transactionService;

    // @Mock
    // private ModelMapper mapper;

    @Test
    public void testGetTransactionById() {
        String s="987489";
        when(transactionService.getTransactionHistory(s))
                .thenReturn(List.of());

        List<Transaction> result = transactionController.readTransactionHistory(s);

        assertNotNull(result);
    }

    // @Test
    // public void testCreateEmployee() {
    //     EmployeeCreateUpdateRequest employeeRequest = new EmployeeCreateUpdateRequest();
    //     // Set properties in the request
    //     Date date = new Date(0);

    //     employeeRequest.setEmail("myEmail@gmail.com");
    //     employeeRequest.setGender("myGender");
    //     employeeRequest.setDepartment("myDepartment");
    //     employeeRequest.setDesignation("myDesignation");
    //     employeeRequest.setName("myName");
    //     employeeRequest.setPassword("myPassword@123");
    //     employeeRequest.setDob(date);
    //     employeeRequest.setDoj(date);

    //     Role mockRole = new Role();
    //     when(roleRepository.findByName(RoleEnum.USER)).thenReturn(Optional.of(mockRole));

    //     Employee mockEmployee = new Employee();
    //     when(employeeRepository.save(any())).thenReturn(mockEmployee);

    //     User mockUser = new User();
    //     when(userRepository.save(any())).thenReturn(mockUser);

    //     EmployeeResponse mockResponse = new EmployeeResponse();
    //     when(mapper.map(any(), eq(EmployeeResponse.class))).thenReturn(mockResponse);

    //     EmployeeResponse result = employeeService.create(employeeRequest);

    //     assertNotNull(result);
    // }

    // @Test
    // public void testUpdateEmployee() {
    //     UUID employeeId = UUID.randomUUID();
    //     EmployeeCreateUpdateRequest request = new EmployeeCreateUpdateRequest();

    //     Employee mockEmployee = new Employee();
    //     User mockUser = new User();
    //     mockEmployee.setUser(mockUser);
    //     when(employeeRepository.findById(employeeId)).thenReturn(Optional.of(mockEmployee));

    //     Employee updatedMockEmployee = new Employee();
    //     when(employeeRepository.save(any())).thenReturn(updatedMockEmployee);

    //     EmployeeResponse mockResponse = new EmployeeResponse();
    //     when(mapper.map(any(), eq(EmployeeResponse.class))).thenReturn(mockResponse);

    //     EmployeeResponse result = employeeService.update(employeeId, request);

    //     assertNotNull(result);
    // }

    // @Test
    // public void testDeleteEmployee() {
    //     UUID employeeId = UUID.randomUUID();
    //     Employee mockEmployee = new Employee();
    //     when(employeeRepository.findById(employeeId)).thenReturn(Optional.of(mockEmployee));

    //     assertDoesNotThrow(() -> employeeService.delete(employeeId));

    //     verify(employeeRepository, times(1)).delete(mockEmployee);
    // }

}