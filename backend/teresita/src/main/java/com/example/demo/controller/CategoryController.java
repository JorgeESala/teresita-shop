package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;

@RestController
@RequestMapping("/api/categorias")
public class CategoryController {

}


public class CategoryController {
	@Autowired
	private CategoryService CategoryService;
	
	@GetMapping
	public List<Category> findAll(){
		return CategoryService.findAll();
	}
	
	@GetMapping("{id}")
	public Category findById(@PathVariable("id") Integer id) {
		return CategoryService.findById(id);
	}
}
