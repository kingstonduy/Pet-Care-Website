package com.petcare.rest.webservices.restful.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@RestController
public class ProductController {
    ProductRepository repository;

    public ProductController(ProductRepository repository){
        this.repository= repository;
    }

    @GetMapping("/products")
    public List<Product> getAllProduct(){
        return repository.findAll();
    }

    @GetMapping("/product/{id}")
    public Optional<Product> getProductById(@PathVariable int id){
        return repository.findById(id);
    }

    @GetMapping("products/{type}")
    public List<Product> getProductByType(@PathVariable String type) {
        Predicate<? super Product> predicate = product -> product.getProductCategory().equalsIgnoreCase(type);
        List<Product> products = repository.findAll();

        List<Product> filteredProducts = products.stream()
                                                 .filter(predicate)
                                                 .collect(Collectors.toList());
        return filteredProducts;
    }

    @GetMapping("products/inStock")
    public List<Product> getProductInStock(){
        Predicate<? super Product> predicate = product -> product.getProductQuantity() > 0;
        List<Product> products = repository.findAll();

        List<Product> filteredProducts = products.stream()
                .filter(predicate)
                .collect(Collectors.toList());
        return filteredProducts;
    }

    @GetMapping("products/outStock")
    public List<Product> getProductOutStock(){
        Predicate<? super Product> predicate = product -> product.getProductQuantity() == 0;
        List<Product> products = repository.findAll();

        List<Product> filteredProducts = products.stream()
                .filter(predicate)
                .collect(Collectors.toList());
        return filteredProducts;
    }



}
