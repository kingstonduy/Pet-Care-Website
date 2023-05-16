package com.petcare.rest.webservices.restful.orderedproduct;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class OrderedProductController {
    OrderedProductService orderedProductService;

    public OrderedProductController(OrderedProductService orderedProductService) {
        this.orderedProductService = orderedProductService;
    }

    @GetMapping("/orderedproducts")
    public List<OrderedProduct> getAllOrderedProduct(){
        return orderedProductService.getOrderedProducts();
    }

    @GetMapping("/orderedproduct/{id}")
    public OrderedProduct getOrderedProduct(@PathVariable Integer id){
        return orderedProductService.getOrderedProduct(id);
    }





}
