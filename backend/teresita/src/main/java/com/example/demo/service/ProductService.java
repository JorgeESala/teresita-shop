package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> findAll(){
		return productRepository.findAll();
	}
}
