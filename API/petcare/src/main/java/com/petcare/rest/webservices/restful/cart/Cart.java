package com.petcare.rest.webservices.restful.cart;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name= "Cart")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Cart {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer cartItemQuantity;

    @ManyToOne
    private Product product;


    @ManyToOne
    private User user;



}
