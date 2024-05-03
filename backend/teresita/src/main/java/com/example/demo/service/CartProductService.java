package com.example.demo.service;

import java.util.List;

import com.example.demo.model.CartProduct;

public interface CartProductService {
	
	void addProduct(Integer carrito_id, Integer producto_id, Integer quantity);
	List<CartProduct> findByCartId(Integer cartId);
	
}
