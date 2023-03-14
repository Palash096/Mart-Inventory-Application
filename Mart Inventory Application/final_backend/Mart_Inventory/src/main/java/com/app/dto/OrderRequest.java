package com.app.dto;

import com.app.pojos.CustomerBill;
import com.app.pojos.ShoppingCart;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderRequest {
	private CustomerBill customerBill;
	
	private ShoppingCart shoppingCart;
}
