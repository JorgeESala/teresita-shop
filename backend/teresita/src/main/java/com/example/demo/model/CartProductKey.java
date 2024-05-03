package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class CartProductKey implements Serializable {
	
	@Column(name = "carrito_id")
	Integer cartId;
	@Column(name = "producto_id")
	Integer productId;
	public CartProductKey(Integer cartId, Integer productId) {
		super();
		this.cartId = cartId;
		this.productId = productId;
	}
	
	public CartProductKey() {
		super();
	}

}
