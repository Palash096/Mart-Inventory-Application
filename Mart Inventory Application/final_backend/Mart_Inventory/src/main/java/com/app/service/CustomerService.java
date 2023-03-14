package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.EmployeeSpecificResp;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Customer;
import com.app.pojos.Employee;
import com.app.pojos.Product;
import com.app.pojos.User;

public interface CustomerService {

	List<Customer> getAllCustDetails();

	Customer addCustDetails(Customer transientProd);

	String deleteCustDetails(Long CustId);

	Customer fetchCustDetails(Long CustId);

	Customer updateCustDetails(Customer detachedCust);

}
