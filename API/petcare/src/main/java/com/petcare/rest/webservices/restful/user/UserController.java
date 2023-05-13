package com.petcare.rest.webservices.restful.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    UserRepository repository;
    public UserController(UserRepository repository) {
        this.repository= repository;
    }

    @GetMapping("/users")
    public List<User> getAllUser(){
        return repository.findAll();
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable int id) {
        return repository.findById(id);
    }

    @PostMapping("/user/login")
    public ResponseEntity<User> checkExistUser (@RequestBody User user)
    {
        String username= user.getUserUserName();
        String password= user.getUserPassword();

        List<User>users = repository.findAll();

        Optional<User> matchedUser = users.stream()
                .filter(u -> u.getUserUserName().equals(username) && u.getUserPassword().equals(password))
                .findFirst();

        return matchedUser.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());


    }
}
