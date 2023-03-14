package com.app.pojos;
/*
 * <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.workLocation}</td>
                <td>{employee.department}</td>
                <td>{employee.joinDate}</td>
                <td>{employee.salary}</td>
                <td>
 */

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//JPA annotations
@Entity
@Table(name="product_tbl")
//Lombok annotations
@NoArgsConstructor //=def arg less ctor
@AllArgsConstructor //all args ctor
@Getter //all getters
@Setter //all setters

public class Product extends BaseEntity {
	@Column(length = 20)
	private String pname;
	@Column(length = 20)
	private String description ;
	private double MRP;
	private double Discount;
	private int pqty;
	private LocalDate expiryDate ;
	private String ptype;
	
	// one product has one location
//	@OneToOne(mappedBy = "ploc", cascade = CascadeType.ALL, orphanRemoval = true)
//	private ProductLocation location;
	
//	@ManyToOne
//	@JoinColumn(name="bill_id")
//	private CustomerBill cust_bill;
	
	
	
}
