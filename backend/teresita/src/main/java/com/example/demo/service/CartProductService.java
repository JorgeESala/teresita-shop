package com.example.demo.service;

import com.example.demo.model.CartProduct;

public interface CartProductService {
//	
//	void addProduct(Integer carrito_id, Integer producto_id, Integer quantity);
//    void insertIntoCartProduct(Integer cartId, Integer productId, Integer quantity);

	CartProduct createCartProduct(CartProduct cartProduct);
}
