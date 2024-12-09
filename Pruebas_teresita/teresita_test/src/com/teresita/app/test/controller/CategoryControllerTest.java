package com.teresita.app.test.controller;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.controller.CategoryController;
import com.example.demo.model.Category;

public class CategoryControllerTest {

    @Test
    public void testCreateCategory_InvalidData() {
        CategoryController categoryController = new CategoryController();
        Category category = new Category(); // Datos de categoría inválidos

        

        ResponseEntity<?> response = categoryController.createCategory(category);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
       
    }

    @Test
    public void testCreateCategory_Conflict() {
       
        CategoryController categoryController = new CategoryController();
        Category existingCategory = categoryRepository.findByName("existingCategory");

       
        Category category = new Category();
        category.setName("existingCategory");

        ResponseEntity<?> response = categoryController.createCategory(category);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        
    }

    @Test
    public void testCreateCategory_Unauthorized() {
        
        CategoryController categoryController = new CategoryController();
        Category category = new Category(); // Datos válidos de la categoría

       

        ResponseEntity<?> response = categoryController.createCategory(category);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        
    }
}
