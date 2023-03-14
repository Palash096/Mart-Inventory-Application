package com.app.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Employee;
import com.app.pojos.Product;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	Optional<Employee> findByEmailAndPassword(String em, String pass);

	// custom query method : for getting complete name by sal
	@Query(value = "select new com.app.pojos.Employee(firstName,lastName) from Employee e where e.salary between ?1 and ?2")
	Stream<Employee> fetchEmpNamesBySalaryRange(double minSalary, double maxSalary);

	// Find all emps having lastname containing some keyword
	List<Employee> findByLastNameContaining(String key);

}
