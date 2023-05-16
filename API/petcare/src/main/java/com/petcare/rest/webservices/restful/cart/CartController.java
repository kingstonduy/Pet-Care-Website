package com.petcare.rest.webservices.restful.cart;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {
    CartService service;

    public CartController(CartService service){
        this.service = service;
    }


    @GetMapping("/cartitems")
    public List<Cart> retrieveCartItems(){
        return service.retrieveCartItems();
    }
    @PostMapping("/cart")
    public ResponseEntity<String> addToCart(@RequestBody AddToCartRequest request) {
        return service.addToCart(request);
    }

    @PutMapping("/cart/update/quantity")
    public ResponseEntity<String> UpdateQuantityCart(@RequestBody CartDTO request) {
        return service.UpdateQuantityCart(request);
    }

    @GetMapping("/cart/{userId}/{productId}")
    public Cart getCartSpecific(@PathVariable Integer userId, @PathVariable Integer productId)    {
        return service.getCartSpecific(userId,productId);
    }

    @GetMapping("/cart/getItemOnCart/{username}")
    public List<CartDTO> getItemOnCart(@PathVariable String username)    {
        return service.getItemOnCart(username);
    }

    @DeleteMapping("/cart/{cartDTOId}")
    public ResponseEntity<String> deleteItemOnCart( @PathVariable Integer cartDTOId)
    {
        return service.deleteItemOnCart(cartDTOId);
    }
}
