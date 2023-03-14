package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.OrderResponse;
import com.app.pojos.ShoppingCart;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
	
	// custom query for getting productname and product mrp form product table into shopping cart
	@Query("SELECT new com.app.dto.OrderResponse(p.pname, p.MRP) FROM ShoppingCart s JOIN s.products p")
	public List<OrderResponse> getProductInShoppingCart();
}
