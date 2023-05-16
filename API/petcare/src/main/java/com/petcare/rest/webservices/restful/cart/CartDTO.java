package com.petcare.rest.webservices.restful.cart;

import lombok.Data;

@Data
public class CartDTO {
    private Integer cartDTOId;
    private String cartDTOName;
    private Integer cartDTOQuantity;
    private String cartDTOCategory;
    private Float cartDTOPrice;
    private String cartDTOImageUrl;


}
