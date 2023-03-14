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
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//JPA annotations
@Entity
@Table(name="BillDetails_tbl")
//Lombok annotations
@NoArgsConstructor //=def arg less ctor
@AllArgsConstructor //all args ctor
@Getter //all getters
@Setter //all setters

public class BillDetails extends BaseEntity {
	private String pname;
	private int pqty;
	private double discount;
	private double price;
	private double gst;
	private double totalamount;
	
	
}
