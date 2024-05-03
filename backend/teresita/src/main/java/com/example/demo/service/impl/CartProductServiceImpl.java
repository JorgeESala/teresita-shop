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

	@Override
	public CartProduct createCartProduct(CartProduct cartProduct) {
		return cartProductRepository.save(cartProduct);
	}

<<<<<<< HEAD
	@Override
	public List<CartProduct> findByCartId(Integer cartId) {
		return cartProductRepository.findByCartId(cartId);
	}
=======
//	@PersistenceContext
//    private EntityManager entityManager;
//	
//	@Override
//	@Transactional
//	public void addProduct(Integer cartId, Integer productId, Integer quantity) {
//		
//		String sql = "INSERT INTO carritos_has_productos (carrito_id, producto_id, cantidad) VALUES (?, ?, ?)";
//        entityManager.createNativeQuery(sql)
//                     .setParameter(1, cartId)
//                     .setParameter(2, productId)
//                     .setParameter(3, quantity)
//                     .executeUpdate();
//	}

	
>>>>>>> b836a95689dcba2c894791b86a4e906dc012c70c

	
}
