package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.CartProduct;
import com.example.demo.model.CartProductKey;

public interface CartProductRepository extends CrudRepository<CartProduct, CartProductKey>{
	
	List<CartProduct> findByCartId(Integer cartProductId);
	
}