package com.bank.springbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.springbackend.entity.LoginRequest;
import com.bank.springbackend.entity.User;
import com.bank.springbackend.service.UserService;


@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	
	//RESTful API method for Login
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody LoginRequest user)
	{
		String username = user.getUsername();
		String password  = user.getPassword();
		if(userService.authenticateUser(username,password))
			return ResponseEntity.ok("Login successful");
		else
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials!");
	}
	
	// RESTful API methods for Retrieval operations
	@GetMapping("/users")
	public List<User> findAllUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/{id}")
	public User findUserById(@PathVariable long id) {
		return userService.getUserById(id);
	}
	
	// RESTful API methods for Create Operation
	@PostMapping("/add_user")
	public User addUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	
	
	// RESTful API method for Update operation
	@PutMapping("/{id}")
	public User updateUserById(@RequestBody User updatedUser, @PathVariable("id") Long userId) {
		return userService.updateUser(updatedUser, userId);
			
	}
	

	// RESTful API method for Delete operation
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id")
                                       Long userId)
    {
    	userService.deleteUserById(userId);
        return "Deleted Successfully";
    }
}