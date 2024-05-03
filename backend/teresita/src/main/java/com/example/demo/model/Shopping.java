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
@Table(name = "compras")
public class shopping {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "direccion", nullable = false)
	private String direccion;
	@Column(name = "fechaIngreso", nullable = false)
	private Date fechIngreso;
	@Column(name = "cantidadProduc", nullable = false)
	private Integer cantidadProduc;
	@Column(name = "total", nullable = false)
	private Double total;
    @Column(name = "UsuarioId", nullable = false)
	private Integer UsuarioId;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public Date getFechaIngreso() {
		return fechaIngreso;
	}
	public void setFechaIngreso(Date fechaIngreso) {
		this.fechaIngreso = fechaIngreso;
	}
	public Integer getCantidadProduc() {
		return cantidadProduc;
	}
	public void setCantidadProduc(Integer cantidadProduc) {
		this.cantidadProduc = cantidadProduc;
	}
	public Double getTotal() {
		return total;
	}
	public void setTotal(Double total) {
		this.total = total;
	}
	public Integer getUsuarioId() {
		return UsuarioId;
	}
	public void setUsuarioId(Integer UsuarioId) {
		this.UsuarioId = UsuarioId;
	}

		super();
		this.id = id;
		this.name = name;
		this.direccion = direccion;
		this.fechaIngreso = fechaIngreso;
		this.cantidadProduc = cantidadProduc;
		this.total = total;
		this.UsuarioId = UsuarioId;
	}
	public shopping(String name, String direccion, Date fechaIngreso, Integer cantidadProduc, Double total) {
		super();
		this.name = name;
		this.direccion = direccion;
		this.fechaIngreso = fechaIngreso;
		this.cantidadProduc= cantidadProduc;
		this.total = total;
	}
	public shopping() {
		super();
	}
