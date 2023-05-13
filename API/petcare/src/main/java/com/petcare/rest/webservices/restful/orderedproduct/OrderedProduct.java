package com.petcare.rest.webservices.restful.orderedproduct;

import com.petcare.rest.webservices.restful.comment.Comment;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
@Data
@Entity(name= "OrderedProduct")
public class OrderedProduct {
    @Id
    @GeneratedValue
    private Integer orderedProductId;
    private String productId;
    private Integer orderedProductQuantity;
    private  Integer userId;
    private Date orderedProductDate;


//    @ManyToOne
//    @JoinColumn(name = "productId")
//    private Product product;
//
//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User user;
//
//    @OneToMany(mappedBy = "orderedProduct")
//    List<Comment> commentList;

    protected OrderedProduct() {}


}
