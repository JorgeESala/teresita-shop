package com.example.demo.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.CartService;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartRepository cartRepository;
	@Autowired
	ProductRepository productRepository;
	
	
	@Override
	public Optional<Cart> findByUserId(Integer userId) {
		return cartRepository.findByUserId(userId);
	}

	@Override
	public Product addProductToCart(Integer userId, Integer productId, Integer quantity) {
		Optional<Cart> cart = findByUserId(userId);
		Product product = productRepository.findById(productId);
		if(cart.isPresent()) {
			cart.get().getProducts().add(product);
		}else {
			Cart newCart = new Cart(userId, product);
			cartRepository.save(newCart);
		}
		return product;
	}

	@Override
	public Optional<Cart> findById(Integer id) {
		return cartRepository.findById(id);
	}

}
