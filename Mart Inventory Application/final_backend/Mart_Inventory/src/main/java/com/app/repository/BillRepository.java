package com.app.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.BillDetails;
import com.app.pojos.Employee;
import com.app.pojos.Product;

public interface BillRepository extends JpaRepository<BillDetails, Long> {

//	@Query(value = "select new com.app.pojos.Product(pname,MRP) from Product p where p.id=?1")
//	// List<Employee> fetchEmpNamesBySalaryRange(double minSalary,double maxSalary);
//	Product saveBillDetails(int id);
	
}
