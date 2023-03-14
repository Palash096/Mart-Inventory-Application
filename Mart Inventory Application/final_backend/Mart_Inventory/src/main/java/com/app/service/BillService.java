package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.EmployeeSpecificResp;
import com.app.dto.LoginRequestDto;
import com.app.pojos.BillDetails;
import com.app.pojos.Employee;
import com.app.pojos.Product;

public interface BillService {

	List<BillDetails> getAllBillDetails();

	BillDetails addBillDetails(BillDetails transientCust);
	
	String deleteBillDetails(Long billId);
	
	BillDetails fetchBillDetails(Long billId);
	
	BillDetails updateBillDetails(BillDetails detachedBill);
	
}
