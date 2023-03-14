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
import com.app.pojos.Employee;
import com.app.service.EmployeeService;
import com.app.service.UserService;

@RestController
//To enable CORS header 
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {
//dep : service layer i.f
	@Autowired
	private UserService userService;

	public UserController() {
		System.out.println("in def ctor " + getClass());
	}

	@PostMapping("/signin")
	public ResponseEntity<?> validateUser(@RequestBody LoginRequestDto dto) {
		System.out.println("in user signin " + dto);
		try {
			return ResponseEntity.ok(userService.authenticateUser(dto));
		} catch (RuntimeException e) {
			System.out.println("err in user controller " + e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).
					body(new ApiResponse(e.getMessage()));
		}

	}

	

}
