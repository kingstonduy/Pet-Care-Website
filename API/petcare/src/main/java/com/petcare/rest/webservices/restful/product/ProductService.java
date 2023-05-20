package com.petcare.rest.webservices.restful.product;

import org.springframework.stereotype.Service;


import java.util.ArrayList;
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

        List<Product> products = repository.findProductsByProductCategory(type);

        return products;

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

    public List<Product> getSortedAscProductByPrice() {
        List<Product> products = repository.findAll();

        // Sort the products list in ascending order by name
        List<Product> sortedProducts = products.stream()
                .sorted(Comparator.comparing(Product::getProductPrice))
                .collect(Collectors.toList());

        return sortedProducts;
    }


    public List<Product> getSortedDesProductByPrice() {
        List<Product> products = repository.findAll();

        // Sort the products list in ascending order by name
        List<Product> sortedProducts = products.stream()
                .sorted(Comparator.comparing(Product::getProductPrice).reversed())
                .collect(Collectors.toList());

        return sortedProducts;
    }

    public List<Product> getProductByConstraint(String Constraint){
        List<Product> products = new ArrayList<>();
        System.out.println(Constraint);
        if(Constraint.equals("food")  ){
            products = getProductByType(Constraint);
            return products;
        }else if(Constraint.equals("fashion")  ) {
            products = getProductByType(Constraint);
            return products;
        }else if(Constraint.equals("grooming")  ){
            products = getProductByType(Constraint);
            return products;
        }else if(Constraint.equals("toy")){
            products = getProductByType(Constraint);
            return products;
        }else if(Constraint.equals("all")){
            products = getAllProduct();
            return products;
        }
        return products;
    }
}
