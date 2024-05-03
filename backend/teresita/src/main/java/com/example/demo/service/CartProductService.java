package com.example.demo.service;

import com.example.demo.model.CartProduct;

public interface CartProductService {
<<<<<<< HEAD
	
	void addProduct(Integer carrito_id, Integer producto_id, Integer quantity);
	List<CartProduct> findByCartId(Integer cartId);
	
=======
//	
//	void addProduct(Integer carrito_id, Integer producto_id, Integer quantity);
//    void insertIntoCartProduct(Integer cartId, Integer productId, Integer quantity);

	CartProduct createCartProduct(CartProduct cartProduct);
>>>>>>> b836a95689dcba2c894791b86a4e906dc012c70c
}
