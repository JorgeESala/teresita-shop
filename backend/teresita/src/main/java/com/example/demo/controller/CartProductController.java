package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CartProduct;
import com.example.demo.service.CartProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/cartProducts")
public class CartProductController {

	@Autowired
	CartProductService cartProductService;
	
	@GetMapping("{userId}")
	List<CartProduct> findByCartId(@PathVariable("userId") Integer cartId){
		return cartProductService.findByCartId(cartId);
	}
}