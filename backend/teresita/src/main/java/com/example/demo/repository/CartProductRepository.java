package com.example.demo.repository;

<<<<<<< HEAD
import java.util.List;

=======
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
>>>>>>> b836a95689dcba2c894791b86a4e906dc012c70c
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.CartProduct;
import com.example.demo.model.CartProductKey;

import jakarta.transaction.Transactional;

public interface CartProductRepository extends CrudRepository<CartProduct, CartProductKey>{
	
<<<<<<< HEAD
	List<CartProduct> findByCartId(Integer cartProductId);
	
}
=======
}
>>>>>>> b836a95689dcba2c894791b86a4e906dc012c70c
