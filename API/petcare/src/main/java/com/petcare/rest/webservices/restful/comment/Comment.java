package com.petcare.rest.webservices.restful.comment;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
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
    private LocalDate commentDate;


    public LocalDate getCommentDate() {
        return commentDate;
    }

    @ManyToOne
    private Product product;

    @ManyToOne
    private User user;

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", commentDescription='" + commentDescription + '\'' +
                ", commentDate=" + commentDate +
                ", product=" + product +
                ", user=" + user +
                '}';
    }
}
