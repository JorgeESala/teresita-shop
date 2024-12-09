package com.teresita.app.test.controller;

import static org.junit.Assert.assertSame;

import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.teresita.app.controller.UserController;

import controller.ProductController;


public class UserControllerTest {
    
    @Test
    public void testCreateUser() {
        
        UserController userController = new UserController();
        User user = new User();

    
        ResponseEntity<?> response = userController.createUser(user);

   
        assertSame(HttpStatus.CREATED, response.getStatusCode());
    }

    @Test
    public void testCreateProduct() {
        
        ProductController productController = new ProductController();
        Product product = new Product(); 

   
        ResponseEntity<?> response = productController.createProduct(product);

      
        assertSame(HttpStatus.CREATED, response.getStatusCode());
    }

   // Datos de entrada no válidos 

	@Test
	public void testCreateUser_InvalidData() {
    UserController userController = new UserController();
    User user = new User(); // Datos de usuario inválidos

    

    ResponseEntity<?> response = userController.createUser(user);

    assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    
}

	//Conflicto de datos
 
	@Test
	public void testCreateUser_Conflict() {
    
    UserController userController = new UserController();
    User existingUser = userRepository.findByUsername("existingUsername");

    
    User user = new User();
    user.setUsername("existingUsername");

    ResponseEntity<?> response = userController.createUser(user);

    assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
    
}

  // Eutenticación y autorización

	@Test
	public void testCreateUser_Unauthorized() {
    
    UserController userController = new UserController();
    User user = new User(); // Datos válidos del usuario

    

    ResponseEntity<?> response = userController.createUser(user);

    assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    
	}
	
	
  

}