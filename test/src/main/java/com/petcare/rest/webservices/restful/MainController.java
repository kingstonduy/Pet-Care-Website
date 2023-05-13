package com.petcare.rest.webservices.restful;

import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.user.User;
import com.petcare.rest.webservices.restful.repository.CartRepository;
import com.petcare.rest.webservices.restful.repository.ProductRepository;
import com.petcare.rest.webservices.restful.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class MainController {
    @Autowired
    private UserRepository userRepository;
    private CartRepository cartRepository;
    private ProductRepository productRepository;

    public MainController(UserRepository userRepository, CartRepository cartRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }


    @GetMapping("/jpa/users")
    public List<User> retrieveAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/jpa/user/{id}")
    public Optional<User> retrieveUserById(@PathVariable int id)
    {
        return userRepository.findById(id);
    }

    @DeleteMapping("/jpa/user/{id}")
    public void deleletUserById(@PathVariable int id) {
        userRepository.deleteById(id);
    }

    @GetMapping("/jpa/products")
    public List<Product> retrieveAllProduct(){
        return productRepository.findAll();
    }

    @GetMapping("/jpa/carts")
    public List<Cart> retrieveAllCart(){
        return cartRepository.findAll();
    }
}
