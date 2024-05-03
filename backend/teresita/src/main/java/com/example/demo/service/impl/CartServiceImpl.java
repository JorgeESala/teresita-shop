package com.example.demo.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.model.CartProduct;
import com.example.demo.model.CartProductKey;
import com.example.demo.model.Product;
import com.example.demo.repository.CartProductRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.CartService;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartRepository cartRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CartProductServiceImpl cartProductServiceImpl;
	
	@Override
	public Optional<Cart> findByUserId(Integer userId) {
		return cartRepository.findByUserId(userId);
	}

//	@Override
//	public void addProductToCart(Integer userId, Integer productId, Integer quantity) {
//		Optional<Cart> optionalCart = findByUserId(userId);
//		Product product = productRepository.findById(productId);
//		CartProduct cartProduct;
//		Cart cart;
//		if(optionalCart.isPresent()) {
//			cart = optionalCart.get();
//			
//			cart.getProducts().add(product);
//		}else {
//			cart = new Cart(userId, product);
//			cart = cartRepository.save(cart);
//		}
//		
//		CartProductKey cartProductKey = new CartProductKey(cart.getId(), productId);
//		
//		cartProduct = new CartProduct(cartProductKey, cart, product, quantity);
//		System.out.println("quantity = " + cartProduct.getQuantity());
//		cartProductServiceImpl.addProduct(cart.getId(), productId, quantity);
//		
//	}

	@Override
	public Optional<Cart> findById(Integer id) {
		return cartRepository.findById(id);
	}

	@Override
	public Cart createCart(Cart cart) {
		return cartRepository.save(cart);
	}

}
