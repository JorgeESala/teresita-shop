package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

public interface UserService {

	List<User> findAll();
	Optional<User> findUserById(Integer id);
	User findByEmail(String email);
	User createUser(User user);
	List<User> getAllActiveUsers();
	List<User> getAllInactiveUsers();
	List<User> getAllUsers(boolean isActive);
	User updateUser(User user, Integer id);
	void deleteUser(Integer id);
	
}
