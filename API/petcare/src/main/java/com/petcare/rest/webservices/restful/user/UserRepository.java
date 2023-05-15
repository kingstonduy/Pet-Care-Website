package com.petcare.rest.webservices.restful.user;

import com.petcare.rest.webservices.restful.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByUserUserNameAndUserPassword(String userUsername, String userPassword);
    public User findByUserUserName(String userUsername);
}
