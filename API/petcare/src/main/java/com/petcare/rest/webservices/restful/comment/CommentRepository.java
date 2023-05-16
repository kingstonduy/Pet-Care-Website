package com.petcare.rest.webservices.restful.comment;

import com.petcare.rest.webservices.restful.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    public List<Comment> findByProduct(Product product);


}
