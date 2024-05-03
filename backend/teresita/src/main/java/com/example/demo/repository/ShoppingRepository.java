package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Product;

public interface shoppingRepository  xtends CrudRepository<shopping, Long>{

	List<ho> findAll();
	Product findById(Integer id);{

}

