package com.petcare.rest.webservices.restful.cart;


import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.product.ProductRepository;
import com.petcare.rest.webservices.restful.user.User;
import com.petcare.rest.webservices.restful.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CartService {
    UserRepository userRepository;
    CartRepository cartRepository;
    ProductRepository productRepository;


    //Constructor
    public CartService(UserRepository userRepository,CartRepository cartRepository,ProductRepository productRepository){
        this.userRepository = userRepository;
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }



    public List<Cart> retrieveCartItems(){
        return cartRepository.findAll();
    }

    public ResponseEntity<String> addToCart(AddToCartRequest request) {
        Product product = productRepository.findById(request.getProductId()).get();
        User user = userRepository.findByUserUserName(request.getUsername());

        Cart cart = cartRepository.findByProductAndUser(product,user);
        if(cart != null)
        {
            cartRepository.deleteById(cart.getId());
            cart.setCartItemQuantity(cart.getCartItemQuantity() + request.getCartItemQuantity());
            cartRepository.save(cart);
        }
        else{
            cart= new Cart();
            cart.setCartItemQuantity(request.getCartItemQuantity());
            cart.setProduct(product);
            cart.setUser(user);

            cartRepository.save(cart);
        }


        return ResponseEntity.status(HttpStatus.CREATED).body("Item added to cart successfully");
    }

    public ResponseEntity<String> UpdateQuantityCart(CartDTO request) {
        Cart cart = cartRepository.findById(request.getCartDTOId()).get();
        cart.setCartItemQuantity(request.getCartDTOQuantity());
        cartRepository.save(cart);

        return ResponseEntity.status(HttpStatus.CREATED).body("Item update quantity to cart successfully");
    }

    public Cart getCartSpecific(Integer userId, Integer productId)    {
        User user = userRepository.findById(userId).get();
        Product product = productRepository.findById(productId).get();
        Cart cart = cartRepository.findByProductAndUser(product,user);
        return cart;
    }

    public List<CartDTO> getItemOnCart(String username)    {
        User user = userRepository.findByUserUserName(username);
        List<Cart> carts = user.getCartList();
        List<CartDTO> res= new ArrayList<>();
        for(Cart cart: carts){
            CartDTO cartDTO = new CartDTO();
            cartDTO.setCartDTOId(cart.getId());
            cartDTO.setCartDTOName(cart.getProduct().getProductName());
            cartDTO.setCartDTOQuantity(cart.getCartItemQuantity());
            cartDTO.setCartDTOCategory(cart.getProduct().getProductCategory());
            cartDTO.setCartDTOPrice(cart.getProduct().getProductPrice());
            cartDTO.setCartDTOImageUrl(cart.getProduct().getProductImageUrl());
            res.add(cartDTO);
        }
        return res;
    }

    public ResponseEntity<String> deleteItemOnCart(Integer cartDTOId){
        cartRepository.deleteById(cartDTOId);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Delete product on cart successfully");

    }
}