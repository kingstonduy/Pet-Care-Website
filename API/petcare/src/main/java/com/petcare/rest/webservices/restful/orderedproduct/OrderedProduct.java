package com.petcare.rest.webservices.restful.orderedproduct;

public class OrderedProduct {
    private Integer orderedProductId;
    private String productId;
    private Integer orderedProductQuantity;

    protected OrderedProduct() {}

    public OrderedProduct(Integer orderedProductId, String productId, Integer orderedProductQuantity) {
        this.orderedProductId = orderedProductId;
        this.productId = productId;
        this.orderedProductQuantity = orderedProductQuantity;
    }

    @Override
    public String toString() {
        return "OrderedProduct{" +
                "orderedProductId=" + orderedProductId +
                ", productId='" + productId + '\'' +
                ", orderedProductQuantity=" + orderedProductQuantity +
                '}';
    }

    public Integer getOrderedProductId() {
        return orderedProductId;
    }

    public void setOrderedProductId(Integer orderedProductId) {
        this.orderedProductId = orderedProductId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public Integer getOrderedProductQuantity() {
        return orderedProductQuantity;
    }

    public void setOrderedProductQuantity(Integer orderedProductQuantity) {
        this.orderedProductQuantity = orderedProductQuantity;
    }
}
