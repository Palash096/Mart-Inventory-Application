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

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//JPA annotations
@Entity
@Table(name="CustomerBill_tbl")
//Lombok annotations
@NoArgsConstructor //=def arg less ctor
@AllArgsConstructor //all args ctor
@Getter //all getters
@Setter //all setters

public class CustomerBill extends BaseEntity {
	@Column(name = "total_items")
	private int totalItems;
	@Column(name = "total_cart_price")
	private double totalCartPrice;
	
	@OneToOne
	@JoinColumn(name = "customer_id") // to specify FK col name
	private Customer user;
	
	// New One
	@OneToMany(targetEntity = Product.class, cascade = CascadeType.ALL)
	@JoinColumn(name="product_items")
	private List<Product> products = new ArrayList<>(); // change to set
	
	// Old One
//	@OneToMany
////	@JoinColumn(name="product_items")
//	private List<Product> products = new ArrayList<>(); // change to set
	
	@OneToOne
	@JoinColumn(name = "bill_id") // to specify FK col name
	private BillDetails userBill;
	
	
}
