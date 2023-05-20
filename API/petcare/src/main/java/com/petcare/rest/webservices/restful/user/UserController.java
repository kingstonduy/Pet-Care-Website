package com.petcare.rest.webservices.restful.user;

import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProductDTO;
import com.petcare.rest.webservices.restful.product.Product;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> retrieveUsers(){
        return userService.retrieveUsers();
    }

    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username){
        return userService.getUserbyUsername(username);
    }
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User userRequest) {
        boolean ok = userService.login(userRequest);

        if (ok == true) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/users/{username}/{password}")
    public User getUserbyUsernameAndPassword(@PathVariable String username, @PathVariable String password){
        return userService.getUserbyUsernameAndPassword(username,password);
    }
    @PostMapping("/register")
    public ResponseEntity<User> Register(@RequestBody User userRegister){
       User user = userService.register(userRegister);
        if(user != null){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/users/{username}/orederedProducts")
    public List<OrderedProductDTO> getOrderedProductEachUser(@PathVariable  String username){
        return  userService.getOrderedProductEachUser(username);

    }

    @GetMapping("/user/userChangeInformation/{username}")
    public UserChangeInformation getUserChangeInformation(@PathVariable String username){
        return userService.getUserChangeInformation(username);

    }

    @PutMapping("user/userChangeInformation/update")
    public ResponseEntity<User> ChangeUserInformation(@RequestBody UserChangeInformation
            userChangeInformation)

    {
        System.out.println(userChangeInformation);
        User user = userService.ChangeUserInformation(userChangeInformation);
        System.out.println("KO CÓ LỖI NÈEEEEE" + user.getUserFullName());
        if(user != null){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }


}


