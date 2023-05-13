package com.petcare.rest.webservices.restful.product;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.cart.Cart;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue
    private Long id;

    private String productName;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Cart> cartList;


}
