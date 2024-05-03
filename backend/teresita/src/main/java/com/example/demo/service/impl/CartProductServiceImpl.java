package com.example.demo.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.model.CartProduct;
import com.example.demo.repository.CartProductRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.service.CartProductService;

@Service
public class CartProductServiceImpl implements CartProductService{

	@Autowired
	CartProductRepository cartProductRepository;
	@Autowired
	CartRepository cartRepository;

	@Override
	public List<CartProduct> findByCartId(Integer cartId) {
		return cartProductRepository.findByCartId(cartId);
	}


	@Override
	public CartProduct createCartProduct(CartProduct cartproduct) {
		
		return cartProductRepository.save(cartproduct);
	}


	@Override
	public List<CartProduct> findByUserId(Integer userId) {
		
		Optional<Cart> cart = cartRepository.findByUserId(userId);
		Cart existingCart;
		
		if(cart.isPresent()) {
			return cartProductRepository.findByCartId(cart.get().getId());
			
		}else {
			return new ArrayList<CartProduct>();
		}
		
	}



	
}
