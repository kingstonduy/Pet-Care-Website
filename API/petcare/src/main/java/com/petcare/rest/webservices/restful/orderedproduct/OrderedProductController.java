package com.petcare.rest.webservices.restful.orderedproduct;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class OrderedProductController {
    OrderedProductRepository repository;

    public OrderedProductController(OrderedProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/orderedproducts")
    public List<OrderedProduct> getAllOrderedProduct(){
        return repository.findAll();
    }

    @GetMapping("/orderedproduct/{id}")
    public Optional<OrderedProduct> getOrderedProduct(@PathVariable int id){
        return repository.findById(id);
    }

}
