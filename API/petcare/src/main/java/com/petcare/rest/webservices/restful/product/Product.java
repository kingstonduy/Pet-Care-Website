package com.petcare.rest.webservices.restful.product;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.comment.Comment;
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
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Cart> cartList;

    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<OrderedProduct> orderedProductList;


    @JsonIgnore

    @OneToMany(mappedBy = "product",  cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Comment> comments;

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", productQuantity=" + productQuantity +
                ", productCategory='" + productCategory + '\'' +
                ", productPrice=" + productPrice +
                ", productDescription='" + productDescription + '\'' +
                ", productImageUrl='" + productImageUrl + '\'' +
                ", cartList=" + cartList +
                ", orderedProductList=" + orderedProductList +
                ", comments=" + comments +
                '}';
    }
}
