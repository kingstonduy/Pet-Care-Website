package com.petcare.rest.webservices.restful.comment;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name="Comment")
public class Comment {
    @Id
    @GeneratedValue
    private Integer id;
    private String commentDescription;
    private Date commentDate;


    @ManyToOne
    private OrderedProduct orderedProduct;

}
