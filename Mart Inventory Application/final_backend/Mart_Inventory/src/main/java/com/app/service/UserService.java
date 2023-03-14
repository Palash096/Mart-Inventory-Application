package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.EmpSalIncrementRequest;
import com.app.dto.EmployeeResponse;
import com.app.dto.EmployeeSpecificResp;
import com.app.dto.LoginRequestDto;
import com.app.dto.UserSpecificResp;
import com.app.pojos.Employee;

public interface UserService {
	
	UserSpecificResp authenticateUser(LoginRequestDto dto);

}
