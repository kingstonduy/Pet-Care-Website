package com.petcare.rest.webservices.restful.user;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.Booking.BookingDate;
import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.comment.Comment;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name="Userr")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {

    @Id
    @GeneratedValue
    private Integer id;


    @Column(unique = true)
    private String  userUserName;


    private  String userFullName;
    private String userPassword;
    private  String userEmail;
    private String userRole;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Cart> cartList;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderedProduct> orderedProductsList;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Comment> comments;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<BookingDate> bookingDates;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userUserName='" + userUserName + '\'' +
                ", userFullName='" + userFullName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userRole='" + userRole + '\'' +
                ", cartList=" + cartList +
                ", orderedProductsList=" + orderedProductsList +
                ", comments=" + comments +
                '}';
    }
}
