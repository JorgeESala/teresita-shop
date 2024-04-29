package com.example.demo.repository;

import com.example.demo.model.User;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
	
	List<User> findAll();
}
