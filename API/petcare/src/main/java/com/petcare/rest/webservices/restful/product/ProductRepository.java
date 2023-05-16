package com.petcare.rest.webservices.restful.product;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findProductsByProductCategory(String ProductCategory);
}
