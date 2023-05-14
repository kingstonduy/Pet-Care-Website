package com.petcare.rest.webservices.restful.repository;

import com.petcare.rest.webservices.restful.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {

}