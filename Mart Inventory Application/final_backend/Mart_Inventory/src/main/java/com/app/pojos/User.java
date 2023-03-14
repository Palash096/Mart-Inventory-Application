package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;//JPA : Java EE specs
//user : one , parent , inverse : since DOES NOT FK

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users_tbl")
@NoArgsConstructor //=def arg less ctor
@AllArgsConstructor //all args ctor
@Getter //all getters
@Setter //all setters
@ToString(exclude = "password")
public class User extends BaseEntity {
	@Column(name = "first_name", length = 20)
	private String firstName;
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column(length = 30, unique = true) // => unique constraint
	private String email;
	@Column(length = 20, nullable = false) // => NOT NULL
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	@Enumerated(EnumType.STRING) // => col : varchar => enum const name
	@Column(name = "user_role", length = 20)
	private Role userRole;
	private LocalDate dob;
	// User 1--->1 AadharCard => uni dir asso between Entity n Composite value type
	@Embedded // OPTIONAL : added only for understanding purpose
	private AadharCard aadharCard;
	

}
