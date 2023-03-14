package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.EmployeeSpecificResp;
import com.app.dto.LoginRequestDto;
import com.app.pojos.BillDetails;
import com.app.pojos.Customer;
import com.app.pojos.Employee;
import com.app.pojos.Product;
import com.app.repository.BillRepository;
import com.app.repository.EmployeeRepository;
import com.app.repository.ProductRepository;

@Service
@Transactional
public class BillServiceImpl implements BillService {
	
	@Autowired
	private BillRepository billRepo;
	private ProductRepository prodRepo;
	
	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}
	
	@Override
	public List<BillDetails> getAllBillDetails(){
		 return billRepo.findAll();
	}
	
	@Override
	public BillDetails addBillDetails(BillDetails transientCust) {
		// TODO Auto-generated method stub
		return billRepo.save(transientCust);
	}

	@Override
	public String deleteBillDetails(Long billId) {
		if (billRepo.existsById(billId)) {
			billRepo.deleteById(billId);
			return "Emp details deleted ....";
		}
		return "Deletion Failed : Invalid Emp Id !!!!!!!!!!!";
	}

	@Override
	public BillDetails fetchBillDetails(Long billId){
		// TODO Auto-generated method stub
		return billRepo.findById(billId).orElseThrow(() -> new ResourceNotFoundException("Invalid Product not found !!!!!"));
	}

	@Override
	public BillDetails updateBillDetails(BillDetails detachedBill) {
		// confirm if emp with id exists !
		if (billRepo.existsById(detachedBill.getId())) {
			return billRepo.save(detachedBill);
		}
		throw new ResourceNotFoundException("Invalid Emp Id : Updation Failed!!!!!!!!");
	}
	
//	@Override
//	public BillDetails addBillDetails(Long pid) {
//		Product p = prodRepo.findById(pid).orElseThrow(() -> new ResourceNotFoundException("Invalid Product Id !!!"));
//		BillDetails billRec = new BillDetails(p.getPname(), p.getMRP());
//		return billRepo.save(billRec);
//	}

//	@Override
//	public Product addProdDetails(int id) {
//		// TODO Auto-generated method stub
//		return billRepo.saveBillDetails(id).// Stream<Emp>
//				map(e -> mapper.map(e, EmployeeResponse.class));
//	}
	
//	@Override
//	public Product addProdDetails(Product tp) {
//		// TODO Auto-generated method stub
//		return billRepo.saveBillDetails(tp);
//	}

}
