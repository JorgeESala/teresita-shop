package com.example.demo.repository;


import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.model.Category;

public interface CategoryRepository  extends CrudRepository<Category, Long>{

	List<Category> findAll();
	Category findById(Integer id);{

    }
}


