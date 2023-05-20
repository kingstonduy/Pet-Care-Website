package com.petcare.rest.webservices.restful.user;

import com.petcare.rest.webservices.restful.cart.Cart;
import com.petcare.rest.webservices.restful.cart.CartDTO;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProductDTO;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProductRepository;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.product.ProductRepository;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Data
public class UserService {
    UserRepository userRepository;
    OrderedProductRepository OrderedProductRepository;
    ProductRepository productRepository;


    // Constructor


    public UserService(UserRepository userRepository, com.petcare.rest.webservices.restful.orderedproduct.OrderedProductRepository orderedProductRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        OrderedProductRepository = orderedProductRepository;
        this.productRepository = productRepository;
    }

    public List<User> retrieveUsers(){
        return userRepository.findAll();
    }

    public User getUser(Integer id){
        return  userRepository.findById(id).get();
    }

    public User getUserbyUsernameAndPassword(String username, String password){
        User user = userRepository.findByUserUserNameAndUserPassword(username,password);
        return user;
    }

    public boolean login(@RequestBody User userRequest) {
        User user = userRepository.findByUserUserNameAndUserPassword(userRequest.getUserUserName(), userRequest.getUserPassword());
        return user != null;

    }

    public User register(@RequestBody User userRegister){
        User saveUser = userRepository.findByUserUserName(userRegister.getUserUserName());
        if(saveUser == null){
            userRepository.save(userRegister);
            return userRegister;
        }
        return null;
    }

    public List<OrderedProductDTO> getOrderedProductEachUser(String username){
        User user= userRepository.findByUserUserName(username);
        List<OrderedProductDTO> orderedProductDTOS = new ArrayList<>();
        for(OrderedProduct orderedProduct : user.getOrderedProductsList()){
            OrderedProductDTO orderedProductDTO = new OrderedProductDTO();

            orderedProductDTO.setProductId(orderedProduct.getProduct().getId());
            orderedProductDTO.setOrderedProductId(orderedProduct.getId());
            orderedProductDTO.setOrderedProductDate(new Date());
            orderedProductDTO.setOrderedProductDTOProductName(orderedProduct.getProduct().getProductName());
            orderedProductDTO.setOrderedProductDTOQuantity(orderedProduct.getOrderedProductQuantity());
            orderedProductDTO.setOrderedProductDTOCategory(orderedProduct.getProduct().getProductCategory());
            orderedProductDTO.setOrderedProductDTOPrice(orderedProduct.getProduct().getProductPrice());
            orderedProductDTO.setOrderedProductDTOImageUrl(orderedProduct.getProduct().getProductImageUrl());

            orderedProductDTOS.add(orderedProductDTO);

        }
        return orderedProductDTOS;


    }

    public User getUserbyUsername(String username){
        User user = userRepository.findByUserUserName(username);
        return user;
    }

    public UserChangeInformation getUserChangeInformation(String username){
        User user = getUserbyUsername(username);
        if(user != null){
            UserChangeInformation userChangeInformation = new UserChangeInformation();
            userChangeInformation.setUserId(user.getId());
            userChangeInformation.setUsername(user.getUserUserName());
            userChangeInformation.setEmail(user.getUserEmail());
            userChangeInformation.setFullName(user.getUserFullName());

            return userChangeInformation;
        }
        return null;

    }

    public User ChangeUserInformation(UserChangeInformation userChangeInformation){

        User user = userRepository.findByUserUserName(userChangeInformation.getUsername());
        System.out.println(user.getId());
        if( user != null && user.getUserPassword().equals(userChangeInformation.getCurrentPassword())){
            System.out.println("VO DUOC DAY NE!!!!!");
            user.setUserFullName(userChangeInformation.getFullName());
            user.setUserPassword(userChangeInformation.getPassword());
            user.setUserEmail(userChangeInformation.getEmail());
            userRepository.save(user);
            return user;
        }
        System.out.println("LOI~ ROI!!!!!!!");
        return null;
    }



}
