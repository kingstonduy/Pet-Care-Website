package com.petcare.rest.webservices.restful.product;

import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity (name="Product")
@Data
public class Product {
    @Id
    @GeneratedValue
    private Integer productId;
    private String productName;
    private Integer productQuantity;
    private String productCategory;
    private Float productPrice;
    @Column(columnDefinition = "VARCHAR(3000)")
    private String productDescription;
    private String productImageUrl;

    @OneToMany(mappedBy = "Product")
    List<Cart> cartList;

//    @OneToMany(mappedBy = "Product")
//    List<OrderedProduct> orderedProductList;


    protected Product(){}


}
