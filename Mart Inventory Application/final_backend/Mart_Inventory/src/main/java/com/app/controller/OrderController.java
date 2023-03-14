package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.CartRequest;
import com.app.dto.OrderRequest;
import com.app.dto.OrderResponse;
import com.app.pojos.CustomerBill;
import com.app.pojos.ShoppingCart;
import com.app.repository.CustomerBillRepository;
import com.app.repository.ProductRepository;
import com.app.repository.ShoppingCartRepository;

@RestController
public class OrderController {
	@Autowired
	private CustomerBillRepository custRepo;
	
	@Autowired
	private ProductRepository prodRepo;
	
	@Autowired
	private ShoppingCartRepository cartRepo;
	
	// for customer Bill
	@PostMapping("/placeOrder")
	public CustomerBill placeOrder(@RequestBody OrderRequest request) {
		return custRepo.save(request.getCustomerBill());
	}
	
	@GetMapping("/findAllOrder")
	public List<CustomerBill> findAllOrder(){
		return custRepo.findAll();
	}
	
	// for shopping cart
	@PostMapping("/putOrderInCart")
	public ShoppingCart putOrderInCart(@RequestBody CartRequest request) {
		return cartRepo.save(request.getShoppingCart());
	}
	
	@GetMapping("/findAllCart")
	public List<ShoppingCart> findAllCart() {
		return cartRepo.findAll();
	}
	
	@GetMapping("/getInfo")
	public List<OrderResponse> getCartInfo() {
		return cartRepo.getProductInShoppingCart();
	}
	
//	@SuppressWarnings("deprecation")
//	@GetMapping("/{cartId}")
//	public ShoppingCart findCartById(@PathVariable Long cartId){
//		return cartRepo.getById(cartId);
//	}
}
