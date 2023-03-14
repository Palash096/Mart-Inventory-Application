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
import com.app.pojos.BillDetails;
import com.app.pojos.Customer;
import com.app.pojos.Employee;
import com.app.pojos.Product;
import com.app.service.BillService;
import com.app.service.EmployeeService;
import com.app.service.ProductService;

@RestController
//To enable CORS header 
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/billing")
public class BillingController {

	@Autowired
	private BillService billService;

	public BillingController() {
		System.out.println("in def ctor " + getClass());
	}
	
	@GetMapping
	public List<BillDetails> getAllBillDetails() {
		System.out.println("in get all billdetails");
		return billService.getAllBillDetails();
	}
	
	@PostMapping
	public BillDetails saveBillDetails(@RequestBody BillDetails transientCust) {
		System.out.println("in save BillDetails " + transientCust + " id " + transientCust.getId());//
		return billService.addBillDetails(transientCust);

	}

	@DeleteMapping("/{billId}")
	public String deleteBillDetails(@PathVariable Long billId) {
		System.out.println("in del BillDetails " + billId);
		return billService.deleteBillDetails(billId);
	}
	
	@GetMapping("/{billId}")
	public BillDetails getBillDetails(@PathVariable Long billId) {
		System.out.println("in get prod details " + billId);
		return billService.fetchBillDetails(billId);
	}
	
	@PutMapping
	public BillDetails updateBillDetails(@RequestBody BillDetails detachedBill) {
		System.out.println("in update cust " + detachedBill.getId());// not null
		return billService.updateBillDetails(detachedBill);
	}
	
}
