package com.petcare.rest.webservices.restful;


import com.petcare.rest.webservices.restful.user.User;
import com.petcare.rest.webservices.restful.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {
    @Autowired
    UserRepository userRepository;


    @GetMapping("/jpa/users")
    public List<User> retrieveAllUser(){
        return userRepository.findAll();
    }
}
