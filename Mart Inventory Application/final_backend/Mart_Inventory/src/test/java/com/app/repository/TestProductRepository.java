package com.app.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.app.pojos.Employee;
import com.app.pojos.Product;

@DataJpaTest // scan only DAO layer spring beans
//to Tell Spring boot container NOT to replace actual data source(DB) by the test data base
@AutoConfigureTestDatabase(replace = Replace.NONE)
//To disable rollback : 
@Rollback(false) // NOT recommended !!!!!!!!!!!
class TestProductRepository {

	@Autowired
	private ProductRepository prodRepo;

	@Test
	void test() {
		assertNotNull(prodRepo);
	}
	
//	@Test
//	void testAddEmployees() {
//		/*
//	private String pname; String description ;double MRP; double Discount;int Pqty;LocalDate Expiry_Date ;String ptype;
//		 */
//		List<Product> product = List.of(
//				new Product("Engage", "Pocket Perfume", 80, 0.0, 10, LocalDate.of(2020, 10, 20),
//						"Perfumes"),
//				new Product("Park Avenue", "Medium Lasting", 400, 0.0, 20, LocalDate.of(2023, 07, 15),
//						"Perfumes"));
//		prodRepo.saveAll(product);
//	}

}
