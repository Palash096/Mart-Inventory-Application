package com.app.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Employee;
import com.app.pojos.Product;
import com.app.service.EmployeeService;
import com.app.service.ProductService;

@RestController
//To enable CORS header 
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService prodService;

	public ProductController() {
		System.out.println("in def ctor " + getClass());
	}

	@GetMapping
	public List<Product> getAllProducts() {
		System.out.println("in get all products");
		return prodService.getAllProdDetails();
	}

	@PostMapping
	public Product saveEmpDetails(@RequestBody Product transientProd) {
		System.out.println("in save emp " + transientProd + " id " + transientProd.getId());//
		return prodService.addProdDetails(transientProd);

	}

	@DeleteMapping("/{prodId}")
	public String deleteProdDetails(@PathVariable Long prodId) {
		System.out.println("in del emp " + prodId);
		return prodService.deleteProdDetails(prodId);
	}

	@GetMapping("/{prodId}")
	public Product getProdDetails(@PathVariable Long prodId) {
		System.out.println("in get prod details " + prodId);
		return prodService.fetchProdDetails(prodId);
	}

	@PutMapping
	public Product updateProdDetails(@RequestBody Product detachedProd) {
		System.out.println("in update emp " + detachedProd.getId());// not null
		return prodService.updateProdDetails(detachedProd);
	}

}
