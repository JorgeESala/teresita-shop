package com.example.demo.repository;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{

	List<Product> findAll();
	
}
