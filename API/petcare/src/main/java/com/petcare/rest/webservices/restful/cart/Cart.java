package com.petcare.rest.webservices.restful.cart;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity(name= "Cart")
public class Cart {
    @Id
    @GeneratedValue
    private Integer cartItemId;
    private Integer userId;
    private Integer productId;
    private Integer cartItemQuantity;

    @ManyToOne
    private User user;
    @ManyToOne
    private Product product;


    protected Cart() {}

    public Cart(Integer cartItemId, Integer userId, Integer productId, Integer cartItemQuantity) {
        this.cartItemId = cartItemId;
        this.userId = userId;
        this.productId = productId;
        this.cartItemQuantity = cartItemQuantity;
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "cartItemId=" + cartItemId +
                ", userId=" + userId +
                ", productId=" + productId +
                ", cartItemQuantity=" + cartItemQuantity +
                '}';
    }

    public Integer getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(Integer cartItemId) {
        this.cartItemId = cartItemId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getCartItemQuantity() {
        return cartItemQuantity;
    }

    public void setCartItemQuantity(Integer cartItemQuantity) {
        this.cartItemQuantity = cartItemQuantity;
    }
}
