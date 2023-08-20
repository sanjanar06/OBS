package com.bank.springbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bank.springbackend.communication.UserDetailsRequest;
import com.bank.springbackend.entity.ProfileStatusEnum;
import com.bank.springbackend.entity.UserProfile;
import com.bank.springbackend.repository.UserProfileRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserProfileService {
    
    private final UserProfileRepository userProfileRepository; 

    public UserProfile createProfile(UserDetailsRequest accountRequest){
      UserProfile userProfile = UserProfile.builder()
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
          // .account(null)
          // .user(null)
          .build();
      

      return userProfileRepository.save(userProfile);
    }

    public List<UserProfile> getAllUserProfiles(){
		return userProfileRepository.findAll();
	}

    public void deleteUserProfileById(Integer id) {
		userProfileRepository.deleteById(id);
	}

}
