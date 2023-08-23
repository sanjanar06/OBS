package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.communication.Request.BeneficiaryRequest;
import com.bank.springbackend.communication.Response.BeneficiaryResponse;
import com.bank.springbackend.entity.Beneficiary;
import com.bank.springbackend.service.BeneficiaryService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/beneficiary")
@CrossOrigin(origins = "http://localhost:3000")
public class BeneficiaryController {

    private final BeneficiaryService beneficiaryService;

    @PostMapping("/create")
    public BeneficiaryResponse createBeneficary(@RequestBody BeneficiaryRequest request) {
        return beneficiaryService.createBeneficiary(request);

    }

    @GetMapping("/view/all/{accountNumber}")
    public List<Beneficiary> getAllBeneficaries(@PathVariable String accountNumber) {
        return beneficiaryService.getAllBeneficaries(accountNumber);
    }

    @GetMapping("/view/{accountNumber}")
    public Beneficiary getBeneficary(@PathVariable String accountNumber) {
        return beneficiaryService.getBeneficiary(accountNumber);
    }

}
