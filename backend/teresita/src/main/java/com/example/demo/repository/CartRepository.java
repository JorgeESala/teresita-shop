package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Cart;
import com.example.demo.model.Product;

public interface CartRepository extends CrudRepository<Cart, Long> {
	Optional<Cart> findByUserId(Integer id);
	Optional<Cart> findById(Integer id);
}
