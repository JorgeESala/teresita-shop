package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "carritos")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	@Column(name = "usuario_id")
	Integer userId;
	
	@ManyToMany
    @JoinTable(
        name = "carritos_has_productos",
        joinColumns = @JoinColumn(name = "carrito_id"),
        inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
	
	private List<Product> products = new ArrayList<>();
	
	
	public Cart() {
		super();
	}
	public Cart(Integer id, Integer user_id, List<Product> products) {
		super();
		this.id = id;
		this.userId = user_id;
		this.products = products;
	}
	public Cart(Integer id, Integer user_id, Product product) {
		super();
		this.id = id;
		this.userId = user_id;
		this.products.add(product);
	}
	public Cart( Integer user_id, List<Product> products) {
		super();
		this.userId = user_id;
		this.products = products;
	}
	public Cart(Integer user_id, Product product) {
		super();
		this.userId = user_id;
		this.products.add(product);
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUser_id() {
		return userId;
	}
	public void setUser_id(Integer user_id) {
		this.userId = user_id;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	
}
