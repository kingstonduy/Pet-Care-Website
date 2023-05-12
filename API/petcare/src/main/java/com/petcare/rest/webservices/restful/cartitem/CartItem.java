package com.petcare.rest.webservices.restful.cartitem;

public class CartItem {
    private Integer cartItemId;
    private Integer userId;
    private Integer productId;
    private Integer cartItemQuantity;

    protected CartItem() {}

    public CartItem(Integer cartItemId, Integer userId, Integer productId, Integer cartItemQuantity) {
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
