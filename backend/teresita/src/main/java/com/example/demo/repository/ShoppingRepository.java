package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.shopping;

public interface shoppingRepository  extends CrudRepository<shopping, Long>{

	List<shopping> findAll();
	shopping findById(Integer id);{

    }
}