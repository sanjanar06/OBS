package com.bank.springbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.UserDetailsRequest;
import com.bank.springbackend.entity.ProfileStatusEnum;
import com.bank.springbackend.entity.UserDetails;
import com.bank.springbackend.repository.UserDetailsRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserDetailsService {
    
    private final UserDetailsRepository userDetailsRepository; 

    public UserDetails createProfile(UserDetailsRequest accountRequest){
      UserDetails userDetails = UserDetails.builder()
          .title(accountRequest.getTitle())
          .firstName(accountRequest.getFirstName())
          .middleName(accountRequest.getMiddleName())
          .lastName(accountRequest.getLastName())
          .emailID(accountRequest.getEmailID())
          .fatherName(accountRequest.getFatherName())
          .motherName(accountRequest.getMotherName())
          .aadharNo(accountRequest.getAadharNo())
          .dob(accountRequest.getDob())
          .address(accountRequest.getAddress())
          .occupationType(accountRequest.getOccupationType())
          .grossAnnualIncome(accountRequest.getGrossAnnualIncome())
          .status(ProfileStatusEnum.ACCEPTED)
          .build();
      

      return userDetailsRepository.save(userDetails);
    }

    public List<UserDetails> getAllUsers(){
		return userDetailsRepository.findAll();
	}

    public void deleteUserProfileById(Integer id) {
		userDetailsRepository.deleteById(id);
	}

}
