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
import com.app.pojos.Customer;
import com.app.pojos.Employee;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.service.CustomerService;
import com.app.service.EmployeeService;
import com.app.service.ProductService;

@RestController
//To enable CORS header 
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CustomerService custService;

	public CustomerController() {
		System.out.println("in def ctor " + getClass());
	}

	@GetMapping
	public List<Customer> getAllCustomers() {
		System.out.println("in get all customers");
		return custService.getAllCustDetails();
	}

	@PostMapping
	public Customer saveCustDetails(@RequestBody Customer transientProd) {
		System.out.println("in save customers " + transientProd + " id " + transientProd.getId());//
		return custService.addCustDetails(transientProd);

	}
	
//	@PostMapping("/login/{custEmail}/{password}")
//	public Customer authenticateUser(@PathVariable String custEmail,@PathVariable String password) {
//		return custService.validateUser(custEmail,password);
//	}
	
	@DeleteMapping("/{custId}")
	public String deleteCustDetails(@PathVariable Long custId) {
		System.out.println("in del emp " + custId);
		return custService.deleteCustDetails(custId);
	}

	@GetMapping("/{custId}")
	public Customer getCustDetails(@PathVariable Long custId) {
		System.out.println("in get prod details " + custId);
		return custService.fetchCustDetails(custId);
	}

	@PutMapping
	public Customer updateCustDetails(@RequestBody Customer detachedCust) {
		System.out.println("in update cust " + detachedCust.getId());// not null
		return custService.updateCustDetails(detachedCust);
	}

	
}
