package com.example.demo.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.CartProduct;
import com.example.demo.repository.CartProductRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.service.CartProductService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Service
public class CartProductServiceImpl implements CartProductService{

	@Autowired
	CartProductRepository cartProductRepository;


//	@Override
//	public List<CartProduct> findById(Integer cartId) {
//		return cartProductRepository.findById(cartId);
//	}


	@Override
	public CartProduct createCartProduct(CartProduct cartproduct) {
		
		return cartProductRepository.save(cartproduct);
	}



	
}
