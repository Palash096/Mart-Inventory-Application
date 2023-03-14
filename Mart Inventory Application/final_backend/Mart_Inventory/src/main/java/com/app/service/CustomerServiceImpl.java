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
import com.app.pojos.Customer;
import com.app.pojos.Employee;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.repository.CustomerRepository;
import com.app.repository.EmployeeRepository;
import com.app.repository.ProductRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository custRepo;
	// dep : model mapper
	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}

	@Override
	public 	List<Customer> getAllCustDetails() {
		return custRepo.findAll();
	}

	@Override
	public Customer addCustDetails(Customer transientProd) {
		// TODO Auto-generated method stub
		return custRepo.save(transientProd);
	}

	@Override
	public String deleteCustDetails(Long CustId) {
		if (custRepo.existsById(CustId)) {
			custRepo.deleteById(CustId);
			return "Emp details deleted ....";
		}
		return "Deletion Failed : Invalid Emp Id !!!!!!!!!!!";
	}

	@Override
	public Customer fetchCustDetails(Long CustId) {
		// TODO Auto-generated method stub
		return custRepo.findById(CustId).orElseThrow(() -> new ResourceNotFoundException("Invalid Product not found !!!!!"));
	}

	@Override
	public Customer updateCustDetails(Customer detachedCust) {
		if (custRepo.existsById(detachedCust.getId())) {
			return custRepo.save(detachedCust);
		}
		throw new ResourceNotFoundException("Invalid Emp Id : Updation Failed!!!!!!!!");
	}

}
