package com.example.demo.model;

public class CartProductRequest {
    private Integer productId;
    private Integer quantity;
    
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public CartProductRequest(Integer productId, Integer quantity) {
		super();
		this.productId = productId;
		this.quantity = quantity;
	}
	public CartProductRequest() {
		super();
	}

    
}