package com.example.demo.service;

import java.util.Optional;

import com.example.demo.model.Cart;
import com.example.demo.model.CartProduct;

public interface CartService {

	Optional<Cart> findByUserId(Integer id);
	Optional<Cart> findById(Integer id);
	Cart createCart(Cart cart);
}
