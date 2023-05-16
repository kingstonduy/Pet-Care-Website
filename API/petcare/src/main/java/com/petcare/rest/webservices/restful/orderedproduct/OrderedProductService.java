package com.petcare.rest.webservices.restful.orderedproduct;


import com.petcare.rest.webservices.restful.comment.CommentRepository;
import com.petcare.rest.webservices.restful.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderedProductService {

    OrderedProductRepository orderedProductRepository;

    CommentRepository commentRepository;

    public OrderedProductService(OrderedProductRepository orderedProductRepository,CommentRepository commentRepository) {
        this.orderedProductRepository = orderedProductRepository;
        this.commentRepository = commentRepository;
    }


    public List<OrderedProduct> getOrderedProducts(){

        return orderedProductRepository.findAll();
    }

    public OrderedProduct getOrderedProduct(Integer id){

        return orderedProductRepository.findById(id).get();
    }





}
