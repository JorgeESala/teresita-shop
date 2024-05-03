package com.example.demo.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.shopping;
import com.example.demo.service.shoppingService;

@RestController
@RequestMapping("/api/compras")
public class shoppingController {
	@Autowired
	private shoppingService shoppingService;
	
	@GetMapping
	public List<shopping> findAll(){
		return shoppingService.findAll();
	}
	
	@GetMapping("{id}")
	public shopping findById(@PathVariable("id") Integer id) {
		return shoppingService.findById(id);
	}
}
