package com.petcare.rest.webservices.restful.user;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.petcare.rest.webservices.restful.cart.Cart;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String userpassword;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Cart> cartList;

}
