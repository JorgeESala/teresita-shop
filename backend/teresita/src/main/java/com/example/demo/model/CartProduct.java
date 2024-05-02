package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "carritos_has_productos")
public class CartProduct {

	@Id
	@ManyToOne
    @JoinColumn(name = "carrito_id")
	Cart cart;
	
	@Id
	@ManyToOne
    @JoinColumn(name = "producto_id")
	Product product;
	
	Integer quantity;
}
