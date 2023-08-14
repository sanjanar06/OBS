package com.bank.springbackend.service;

import java.io.Console;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.bank.springbackend.entity.User;
import com.bank.springbackend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public boolean authenticateUser(String username, String password)
	{
		User user = userRepository.findByUsername(username);
		
		if(user == null)
			return false;
		else
			return user.getPassword().equals(password);
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public User getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	public User updateUser(User updatedUser, Long userId) {
		User currentUser = userRepository.findById(userId).orElse(null);
		if (Objects.nonNull(updatedUser.getUsername()) && !"".equalsIgnoreCase(updatedUser.getUsername())) 
		{
	            currentUser.setUsername(
	                updatedUser.getUsername());
	    }
	 
		if (Objects.nonNull(updatedUser.getPassword()) && !"".equalsIgnoreCase(updatedUser.getPassword())) 
		{
	            currentUser.setPassword(
	                updatedUser.getPassword());
	    }
	 
	 
	        return userRepository.save(currentUser);
	}
	
	public void deleteUserById(Long id) {
		userRepository.deleteById(id);
	}

}