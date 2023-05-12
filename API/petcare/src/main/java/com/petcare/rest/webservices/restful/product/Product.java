package com.petcare.rest.webservices.restful.product;

import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue
    private Integer productId;
    private String productName;
    private Integer productQuantity;
    private String productCategory;
    private Float productPrice;
    private String productDescription;
    private String productImageUrl;

    @OneToMany(mappedBy = "Product")
    List<Cart> cartList;

    @OneToMany(mappedBy = "Product")
    List<OrderedProduct> orderedProductList;


    protected Product(){}

    public Product(Integer productId, String productName, Integer productQuantity, String productCategory, Float productPrice, String productDescription, String productImageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productImageUrl = productImageUrl;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", productQuantity=" + productQuantity +
                ", productCategory='" + productCategory + '\'' +
                ", productPrice=" + productPrice +
                ", productDescription='" + productDescription + '\'' +
                ", productImageUrl='" + productImageUrl + '\'' +
                '}';
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Integer productQuantity) {
        this.productQuantity = productQuantity;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public Float getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Float productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductImageUrl() {
        return productImageUrl;
    }

    public void setProductImageUrl(String productImageUrl) {
        this.productImageUrl = productImageUrl;
    }
}
