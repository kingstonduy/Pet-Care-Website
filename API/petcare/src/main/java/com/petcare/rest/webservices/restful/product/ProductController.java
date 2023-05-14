package com.petcare.rest.webservices.restful.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.Optional;


@RestController
public class ProductController {
    ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/products")
    public List<Product> getAllProduct(){
        return service.getAllProduct();
    }

    @GetMapping("/product/{id}")
    public Optional<Product> getProductById(@PathVariable int id){
        return service.getProductById(id);
    }

    @GetMapping("products/{type}")
    public List<Product> getProductByType(@PathVariable String type) {
        return service.getProductByType(type);
    }

    @GetMapping("products/inStock")
    public List<Product> getProductInStock(){
        return service.getProductInStock();
    }

    @GetMapping("products/outStock")
    public List<Product> getProductOutStock(){
        return service.getProductOutStock();
    }

    @GetMapping("products/sorted/asc/name")
    public List<Product> getSortedAscProductByName() {
        return  service.getSortedAscProductByName();
    }


}
