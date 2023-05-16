package com.petcare.rest.webservices.restful.cart;

import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Cart findByProductAndUser(Product product, User user);
    void deleteByProductAndUser(Product product, User user);
    List<Cart> findByUser(User user);
}
