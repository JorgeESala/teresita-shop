package com.example.demo.model;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.ToString;

@Entity
@Table(name = "categorias")
public class Categorias {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "nombreCateg", nullable = false)
	private String nameCateg;

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNameCateg() {
		return nameCateg;
	}
	public void setNameCateg(String nameCateg) {
		this.nameCateg = nameCateg;
	}
		this.id = id;
		this.nameCateg = nameCateg;
}
