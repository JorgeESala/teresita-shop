package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import com.example.demo.model.User;

public interface UserService {

	List<User> findAll();
	Optional<User> findById(Integer id);
	Optional<User> findByEmail(String email);
	User createUser(User user);
	List<User> getAllActiveUsers();
	List<User> getAllInactiveUsers();
	List<User> getAllUsers(boolean isActive);
	User updateUser(User user, Integer id);
	void deleteUser(Integer id);
	Boolean login(User user);
}
