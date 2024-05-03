package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.CartProduct;
import com.example.demo.model.CartProductKey;

public interface CartProductRepository extends CrudRepository<CartProduct, CartProductKey>{
	

}
