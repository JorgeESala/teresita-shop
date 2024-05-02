package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping
	public List<User> findAll(){
		return userService.findAll();	
	}
	
	@GetMapping("{id}")
	ResponseEntity<?> getUserById(@PathVariable("id") Integer id){
		Optional<User> user = userService.findById(id);
		if(user.isPresent()) {
			return ResponseEntity.ok(user.get());
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
		}
	}
	
	@PostMapping
	ResponseEntity<User> createUser(@RequestBody User user){
		User createdUser = userService.createUser(user);
		return new ResponseEntity<User>( createdUser, HttpStatus.CREATED);
	}
	
	@DeleteMapping("{id}")
	ResponseEntity<String> deleteUser(@PathVariable("id") Integer id){
		userService.deleteUser(id);
		return new ResponseEntity<String>("User id " + id + " successfully deleted", HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable("id") Integer id){
		User updatedUser = userService.updateUser(user, id);
		return new ResponseEntity<User>(updatedUser, HttpStatus.CREATED);
	}
	
}
