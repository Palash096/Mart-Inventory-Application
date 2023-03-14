package com.app.dto;

import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class UserSpecificResp {
	//add only required fields
	private Long id;
	private String firstName;
	private String lastName;
	private Role userRole;

}
