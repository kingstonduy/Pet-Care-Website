package com.petcare.rest.webservices.restful.orderedproduct;

import com.petcare.rest.webservices.restful.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderedProductRepository extends JpaRepository<OrderedProduct, Integer> {
     List<OrderedProduct> findByUser(User user);
}
