package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.CustomerBill;

public interface CustomerBillRepository extends JpaRepository<CustomerBill, Long> {
	
}
