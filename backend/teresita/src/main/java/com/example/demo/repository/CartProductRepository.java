package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.CartProduct;
import com.example.demo.model.CartProductKey;

import jakarta.transaction.Transactional;

public interface CartProductRepository extends CrudRepository<CartProduct, CartProductKey>{
	
//	List<CartProduct> findById(Integer userId);
	
}
