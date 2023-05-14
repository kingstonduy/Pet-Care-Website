package com.petcare.rest.webservices.restful.user;

import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
@Data
public class UserService {
    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
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

    public void register(@RequestBody User userRegister){
        User saveUser = userRepository.save(userRegister);
        return;
    }


}
