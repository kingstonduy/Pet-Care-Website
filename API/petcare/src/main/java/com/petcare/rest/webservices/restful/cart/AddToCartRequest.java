package com.petcare.rest.webservices.restful.cart;

import lombok.Data;

@Data
public class AddToCartRequest {
    private Integer cartItemQuantity;
    private Integer productId;
    private String username;
}