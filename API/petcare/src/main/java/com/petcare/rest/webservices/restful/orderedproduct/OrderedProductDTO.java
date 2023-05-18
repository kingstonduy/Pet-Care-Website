package com.petcare.rest.webservices.restful.orderedproduct;

import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.cart.CartDTO;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.criteria.Order;
import lombok.Data;

import java.util.Date;


@Data
public class OrderedProductDTO {
    private Integer orderedProductId;
    private Integer productId;
    private Date orderedProductDate;
    private String orderedProductDTOProductName;
    private Integer orderedProductDTOQuantity;
    private String orderedProductDTOCategory;
    private Float orderedProductDTOPrice;
    private String orderedProductDTOImageUrl;


}
