package com.petcare.rest.webservices.restful.product;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name="Product")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Product {
    @Id
    @GeneratedValue
    private Integer id;
    private String productName;
    private Integer productQuantity;
    private String productCategory;
    private Float productPrice;
    @Column(columnDefinition = "VARCHAR(3000)")
    private String productDescription;
    private String productImageUrl;


    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    List<Cart> cartList;

    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    List<OrderedProduct> orderedProductList;


}
