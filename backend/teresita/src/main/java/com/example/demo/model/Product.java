package com.example.demo.model;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Product {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "nombre", nullable = false)
	private String name;
	@Column(name = "descripcion", nullable = false)
	private String description;
	@Column(name = "precio", nullable = false)
	private Double price;
	@Column(name = "imagen", nullable = false)
	private String image;
	@Column(nullable = false)
	private Integer stock;
	
	@OneToMany(mappedBy = "product")
	private Set<CartProduct> cartProducts;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Integer getStock() {
		return stock;
	}
	public void setStock(Integer stock) {
		this.stock = stock;
	}
	public Product(Integer id, String name, String description, Double price, String image, Integer stock,
			Set<CartProduct> cartProducts) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.image = image;
		this.stock = stock;
		this.cartProducts = cartProducts;
	}
	public Product(String name, String description, Double price, String image, Integer stock) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.image = image;
		this.stock = stock;
	}
	public Product() {
		super();
	}
	
}
