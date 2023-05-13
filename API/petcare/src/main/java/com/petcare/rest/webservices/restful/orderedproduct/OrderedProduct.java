package com.petcare.rest.webservices.restful.orderedproduct;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.comment.Comment;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name= "OrderedProduct")
public class OrderedProduct {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer orderedProductQuantity;
    private Date orderedProductDate;


    @ManyToOne
    private Product product;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "orderedProduct", cascade = CascadeType.ALL)
    List<Comment> commentList;



}
