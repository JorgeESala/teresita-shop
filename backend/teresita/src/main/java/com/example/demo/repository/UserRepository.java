package com.example.demo.repository;

import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
	
	List<User> findAll();
	Optional<User> findUserById(Integer id);
	Boolean existsByEmail(String email);
}
