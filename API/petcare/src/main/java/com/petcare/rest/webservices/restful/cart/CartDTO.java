package com.petcare.rest.webservices.restful.cart;

import com.petcare.rest.webservices.restful.product.Product;
import lombok.Data;


public class CartDTO {
    private Integer cartDTOId;
    private String cartDTOName;
    private Integer cartDTOQuantity;
    private String cartDTOCategory;
    private Float cartDTOPrice;
    private String cartDTOImageUrl;



    public CartDTO() {}


    public CartDTO(Integer cartDTOId, String cartDTOName, Integer cartDTOQuantity, String cartDTOCategory, Float cartDTOPrice, String cartDTOImageUrl) {
        this.cartDTOId = cartDTOId;
        this.cartDTOName = cartDTOName;
        this.cartDTOQuantity = cartDTOQuantity;
        this.cartDTOCategory = cartDTOCategory;
        this.cartDTOPrice = cartDTOPrice;
        this.cartDTOImageUrl = cartDTOImageUrl;
    }

    @Override
    public String toString() {
        return "CartDTO{" +
                "cartDTOId=" + cartDTOId +
                ", cartDTOName='" + cartDTOName + '\'' +
                ", cartDTOQuantity=" + cartDTOQuantity +
                ", cartDTOCategory='" + cartDTOCategory + '\'' +
                ", cartDTOPrice=" + cartDTOPrice +
                ", cartDTOImageUrl='" + cartDTOImageUrl + '\'' +
                '}';
    }

    public Integer getCartDTOId() {
        return cartDTOId;
    }

    public void setCartDTOId(Integer cartDTOId) {
        this.cartDTOId = cartDTOId;
    }

    public String getCartDTOName() {
        return cartDTOName;
    }

    public void setCartDTOName(String cartDTOName) {
        this.cartDTOName = cartDTOName;
    }

    public Integer getCartDTOQuantity() {
        return cartDTOQuantity;
    }

    public void setCartDTOQuantity(Integer cartDTOQuantity) {
        this.cartDTOQuantity = cartDTOQuantity;
    }

    public String getCartDTOCategory() {
        return cartDTOCategory;
    }

    public void setCartDTOCategory(String cartDTOCategory) {
        this.cartDTOCategory = cartDTOCategory;
    }

    public Float getCartDTOPrice() {
        return cartDTOPrice;
    }

    public void setCartDTOPrice(Float cartDTOPrice) {
        this.cartDTOPrice = cartDTOPrice;
    }

    public String getCartDTOImageUrl() {
        return cartDTOImageUrl;
    }

    public void setCartDTOImageUrl(String cartDTOImageUrl) {
        this.cartDTOImageUrl = cartDTOImageUrl;
    }
}
