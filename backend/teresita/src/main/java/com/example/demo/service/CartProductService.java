package com.example.demo.service;

import java.util.List;

import com.example.demo.model.CartProduct;

public interface CartProductService {
	
	CartProduct createCartProduct(CartProduct cartproduct);
	List<CartProduct> findByCartId(Integer cartUd);
	
}
