package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.shopping;
import com.example.demo.repository.shoppingRepository;

@Service
public class shoppingService {
	@Autowired
	private shoppingRepository shoppingRepository;
	
	public List<shopping> findAll(){
		return shoppingRepository.findAll();
	}
	public shopping findById(Integer id) {
		return shoppingRepository.findById(id);
	}
}
