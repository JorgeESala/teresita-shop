package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepository CategoryRepository;
	
	public List<Category> findAll(){
		return CategoryRepository.findAll();
	}
	public Category findById(Integer id) {
		return CategoryRepository.findById(id);
	}
}
