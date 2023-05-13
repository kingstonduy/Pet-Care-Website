package com.petcare.rest.webservices.restful.cart;

import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name= "Cart")
public class Cart {
    @Id
    @GeneratedValue
    private Integer cartId;
    private Integer userId;
    private Integer productId;
    private Integer cartItemQuantity;

    @ManyToOne
    @JoinColumn(name= "userId")
    private User user;
    @ManyToOne
    @JoinColumn(name = "productId")
    private Product product;


    protected Cart() {}


}
