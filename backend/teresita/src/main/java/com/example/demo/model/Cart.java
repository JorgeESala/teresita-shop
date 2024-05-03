package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.ToString;

@Entity
@Table(name = "carritos")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	@Column(name = "usuario_id")
	Integer userId;
	
	@OneToMany(mappedBy = "cart")
	private Set<CartProduct> cartProducts;
	
	
	public Cart() {
		super();
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	public Set<CartProduct> getCartProducts() {
		return cartProducts;
	}


	public void setCartProducts(Set<CartProduct> cartProducts) {
		this.cartProducts = cartProducts;
	}


	public Cart(Integer id, Integer userId, Set<CartProduct> cartProducts) {
		super();
		this.id = id;
		this.userId = userId;
		this.cartProducts = cartProducts;
	}


	public Cart(Integer id, Integer userId) {
		super();
		this.id = id;
		this.userId = userId;
	}
	
	
}
