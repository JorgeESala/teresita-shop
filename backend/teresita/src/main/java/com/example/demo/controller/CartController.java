package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("api/carts")
public class CartController {

	
	CartService cartService;
	
	public CartController(CartService cartService) {
		super();
		this.cartService = cartService;
	}

	@GetMapping("{id}")
	ResponseEntity<?> findByUserId(@PathVariable("id") Integer id){
		Optional<Cart> cart = cartService.findByUserId(id);
		if(cart.isPresent()) {
			return ResponseEntity.ok(cart.get());
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ningún producto en carrito");
		}
	}
	
	
	
}
