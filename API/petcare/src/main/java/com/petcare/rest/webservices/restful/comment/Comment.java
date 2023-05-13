package com.petcare.rest.webservices.restful.comment;

import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity (name="Comment")
public class Comment {
    @Id
    @GeneratedValue
    private Integer commentId;
    private Integer orderedProductId;
    private String commentDescription;
    private Date commentDate;


//    @ManyToOne
//    @JoinColumn(name = "orderedProductId")
//    private OrderedProduct orderedProduct;

    protected Comment () {}


}
