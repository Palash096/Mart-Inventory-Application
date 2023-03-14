package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.EmployeeSpecificResp;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Employee;
import com.app.pojos.Product;

public interface ProductService {

	List<Product> getAllProdDetails();

	Product addProdDetails(Product transientProd);

	String deleteProdDetails(Long ProdId);

	Product fetchProdDetails(Long ProdId);

	Product updateProdDetails(Product detachedProd);
	
}
