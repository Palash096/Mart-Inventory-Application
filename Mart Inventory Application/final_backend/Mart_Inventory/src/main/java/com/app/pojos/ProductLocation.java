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

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//JPA annotations
@Entity
@Table(name="ProdLocation_tbl")
//Lombok annotations
@NoArgsConstructor //=def arg less ctor
@AllArgsConstructor //all args ctor
@Getter //all getters
@Setter //all setters

public class ProductLocation extends BaseEntity {
	@Column(length = 30)
	private String plocation;
	// similarly one productlocation has one product
	// one productlocation has multiple product(option)
	@OneToOne
	@JoinColumn(name = "product_id")
	private Product ploc;
	
	@OneToOne
	@JoinColumn(name = "category_id")
	private Category category;
	
}
