// package com.bank.springbackend.service;

// import java.util.List;
// import java.util.Objects;

// import org.springframework.stereotype.Service;

// import com.bank.springbackend.entity.User;
// import com.bank.springbackend.exception.ResourceNotFoundException;
// import com.bank.springbackend.repository.UserRepository;

// import lombok.RequiredArgsConstructor;

// @RequiredArgsConstructor
// @Service
// public class UserService {
	
// 	private final UserRepository userRepository;
	
// 	public boolean authenticateUser(String username, String password)
// 	{
// 		User user = userRepository.findByUsername(username);
		
// 		if(user == null)
// 			return false;
// 		else
// 			return user.getPassword().equals(password);
// 	}
	
// 	public List<User> getAllUsers(){
// 		return userRepository.findAll();
// 	}
	
// 	public User getUserById(Long id) {
// 		return userRepository.findById(id).orElse(null);
// 	}
	
// 	public User createUser(User user) {
// 		return userRepository.save(user);
// 	}
	
// 	public User updateUser(User updatedUser, Long userId) {
// 		User currentUser = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + userId));

// 		if (Objects.nonNull(updatedUser.getUsername()) && !"".equalsIgnoreCase(updatedUser.getUsername())) 
// 		{
// 	            currentUser.setUsername(
// 	                updatedUser.getUsername());
// 	    }
	 
// 		if (Objects.nonNull(updatedUser.getPassword()) && !"".equalsIgnoreCase(updatedUser.getPassword())) 
// 		{
// 	            currentUser.setPassword(
// 	                updatedUser.getPassword());
// 	    }
	 
	 
// 	    return userRepository.save(currentUser);
// 	}
	
// 	public void deleteUserById(Long id) {
// 		userRepository.deleteById(id);
// 	}

// }