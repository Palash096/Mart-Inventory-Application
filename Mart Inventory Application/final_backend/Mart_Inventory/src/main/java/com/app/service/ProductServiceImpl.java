package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.EmployeeSpecificResp;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Employee;
import com.app.pojos.Product;
import com.app.repository.EmployeeRepository;
import com.app.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	// dep : dao layer i/f
	@Autowired
	private ProductRepository prodRepo;
	// dep : model mapper
	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}

	@Override
	public 	List<Product> getAllProdDetails() {
		return prodRepo.findAll();
	}

	@Override
	public Product addProdDetails(Product transientProd) {
		// TODO Auto-generated method stub
		return prodRepo.save(transientProd);
	}

	@Override
	public String deleteProdDetails(Long ProdId) {
		// chekc if emp exists by id
		if (prodRepo.existsById(ProdId)) {
			prodRepo.deleteById(ProdId);
			return "Emp details deleted ....";
		}
		return "Deletion Failed : Invalid Emp Id !!!!!!!!!!!";
	}

	@Override
	public Product fetchProdDetails(Long ProdId) {
		// TODO Auto-generated method stub
		return prodRepo.findById(ProdId).orElseThrow(() -> new ResourceNotFoundException("Invalid Product not found !!!!!"));
	}

	@Override
	public Product updateProdDetails(Product detachedProd) {
		if (prodRepo.existsById(detachedProd.getId())) {
			return prodRepo.save(detachedProd);
		}
		throw new ResourceNotFoundException("Invalid Emp Id : Updation Failed!!!!!!!!");
	}

}
