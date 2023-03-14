package com.app.service;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.dto.UserSpecificResp;
import com.app.pojos.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	// dep : dao layer i/f
	@Autowired
	private UserRepository userRepo;
	// dep : model mapper
	@Autowired
	private ModelMapper mapper;

	@PostConstruct
	public void init() {
		System.out.println("in init " + mapper);
	}

	@Override
	public UserSpecificResp authenticateUser(LoginRequestDto dto) {
		// TODO Auto-generated method stub
		User user = userRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Bad Credentials !!!!!"));
		//=> success
		return mapper.map(user, UserSpecificResp.class);
		
	}

}
