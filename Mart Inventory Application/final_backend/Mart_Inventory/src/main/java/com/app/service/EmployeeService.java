package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.EmployeeSpecificResp;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Employee;

public interface EmployeeService {
//get all emps
	List<Employee> getAllEmpDetails();

	Employee addEmpDetails(Employee transientEmp);

	String deleteEmpDetails(Long empId);

	Employee fetchEmpDetails(Long empId);

	Employee updateEmpDetails(Employee detachedEmp);

	EmployeeSpecificResp authenticateEmp(LoginRequestDto dto);

}
