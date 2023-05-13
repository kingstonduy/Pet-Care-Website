package com.petcare.rest.webservices.restful.user;

import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data // lombok giúp generate các hàm constructor, get, set v.v
@Entity(name="Userr")
public class User {

    @Id
    @GeneratedValue
    private Integer userId;
    private String  userUserName;
    private  String userFullName;
    private String userPassword;
    private  String userEmail;
    private String userRole;

    @OneToMany(mappedBy = "userr")
    private List<Cart> cartList;

    @OneToMany(mappedBy = "userr")
    private List<OrderedProduct> orderedProductsList;


    public User(){

    }





}
