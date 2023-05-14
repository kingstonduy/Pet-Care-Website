package com.petcare.rest.webservices.restful.repository;


import com.petcare.rest.webservices.restful.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

}