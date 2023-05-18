package com.petcare.rest.webservices.restful.orderedproduct;

import com.petcare.rest.webservices.restful.cart.CartDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PatchMapping("/orderedproduct/checkout")
    public ResponseEntity<String> flushCartItemToOrderedProduct(@RequestBody List<CartDTO> cartDTOList){
        return orderedProductService.flushCartItemToOrderedProduct(cartDTOList);
    }






}
