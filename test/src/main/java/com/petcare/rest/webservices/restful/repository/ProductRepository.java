package com.petcare.rest.webservices.restful.repository;

import com.petcare.rest.webservices.restful.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
