package com.petcare.rest.webservices.restful.user;

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

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Integer id){
        return  userService.getUser(id);
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
        userService.register(userRegister);
        return ResponseEntity.ok().build();
    }

}

