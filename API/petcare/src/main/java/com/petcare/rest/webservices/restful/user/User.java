package com.petcare.rest.webservices.restful.user;

import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity(name= "User")
public class User {

    @Id
    @GeneratedValue
    private Integer userId;
    private String  userUserName;
    private  String userFullName;
    private String userPassword;
    private  String userEmail;
    private String userRole;

    @OneToMany(mappedBy = "User")
    private List<Cart> cartList;

    @OneToMany(mappedBy = "User")
    private List<OrderedProduct> orderedProductsList;


    public User(){

    }

    public User(Integer userId, String userUserName, String userFullName, String userPassword, String userEmail, String userRole) {
        this.userId = userId;
        this.userUserName = userUserName;
        this.userFullName = userFullName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.userRole = userRole;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userUserName='" + userUserName + '\'' +
                ", userFullName='" + userFullName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userRole='" + userRole + '\'' +
                '}';
    }

    public Integer getUserId() {
        return userId;
    }


    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserUserName() {
        return userUserName;
    }

    public void setUserUserName(String userUserName) {
        this.userUserName = userUserName;
    }

    public String getUserFullName() {
        return userFullName;
    }

    public void setUserFullName(String userFullName) {
        this.userFullName = userFullName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }



}
