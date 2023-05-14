package com.petcare.rest.webservices.restful.product;

import org.springframework.stereotype.Service;


import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;


@Service
public class ProductService {
    ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProduct(){
        return repository.findAll();
    }

    public Optional<Product> getProductById(int id){
        return repository.findById(id);
    }

    public List<Product> getProductByType(String type) {
        Predicate<? super Product> predicate = product -> product.getProductCategory().equalsIgnoreCase(type);
        List<Product> products = repository.findAll();

        List<Product> filteredProducts = products.stream()
                .filter(predicate)
                .collect(Collectors.toList());
        return filteredProducts;
    }

    public List<Product> getProductInStock(){
        Predicate<? super Product> predicate = product -> product.getProductQuantity() > 0;
        List<Product> products = repository.findAll();

        List<Product> filteredProducts = products.stream()
                .filter(predicate)
                .collect(Collectors.toList());
        return filteredProducts;
    }

    public List<Product> getProductOutStock(){
        Predicate<? super Product> predicate = product -> product.getProductQuantity() == 0;
        List<Product> products = repository.findAll();

        List<Product> filteredProducts = products.stream()
                .filter(predicate)
                .collect(Collectors.toList());
        return filteredProducts;
    }

    public List<Product> getSortedAscProductByName() {
        List<Product> products = repository.findAll();

        // Sort the products list in ascending order by name
        List<Product> sortedProducts = products.stream()
                .sorted(Comparator.comparing(Product::getProductName))
                .collect(Collectors.toList());

        return sortedProducts;
    }
}
