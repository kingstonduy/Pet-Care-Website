package com.petcare.rest.webservices.restful.cart;


import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.product.ProductRepository;
import com.petcare.rest.webservices.restful.user.User;
import com.petcare.rest.webservices.restful.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CartService {
    UserRepository userRepository;
    CartRepository cartRepository;
    ProductRepository productRepository;


    public CartService(UserRepository userRepository,CartRepository cartRepository,ProductRepository productRepository){
        this.userRepository = userRepository;
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }
    public List<Cart> retrieveCartItems(){
        return cartRepository.findAll();
    }

    public ResponseEntity<String> addToCart(AddToCartRequest request) {

        Cart cart = new Cart();
        cart.setCartItemQuantity(request.getCartItemQuantity());


        Product product = productRepository.findById(request.getProductId()).get();
        User user = userRepository.findById(request.getUserId()).get();


        cart.setProduct(product);
        cart.setUser(user);

        cartRepository.save(cart);
        return ResponseEntity.status(HttpStatus.CREATED).body("Item added to cart successfully");
    }

    public ResponseEntity<String> UpdateQuantityCart(AddToCartRequest request) {
        Product product = productRepository.findById(request.getProductId()).get();
        User user = userRepository.findById(request.getUserId()).get();
        Cart cart = cartRepository.findByProductAndUser(product,user);
        cart.setCartItemQuantity(request.getCartItemQuantity());
        cartRepository.save(cart);
        return ResponseEntity.status(HttpStatus.CREATED).body("Item update quantity to cart successfully");
    }

    public Cart getCartSpecific(Integer userId, Integer productId)    {
        User user = userRepository.findById(userId).get();
        Product product = productRepository.findById(productId).get();
        Cart cart = cartRepository.findByProductAndUser(product,user);
        return cart;
    }
}