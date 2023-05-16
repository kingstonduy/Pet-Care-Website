package com.petcare.rest.webservices.restful.comment;

import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProductRepository;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.product.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CommentService {

    ProductRepository productRepository;

    CommentRepository commentRepository;

    public CommentService(ProductRepository productRepository,CommentRepository commentRepository) {
        this.productRepository = productRepository;
        this.commentRepository = commentRepository;
    }


    public List<Comment> comments(){
        return commentRepository.findAll();
    }



    public List<CommentView> getCommentsByProductId(Integer productId) {
        Product product = productRepository.findById(productId).orElse(null);
        List<Comment> comments = commentRepository.findByProduct(product);
        List<CommentView> commentViews = new ArrayList<>();

        if (product != null) {
            for (Comment comment : comments) {
                CommentView commentView = new CommentView();
                commentView.setCommentId(comment.getId());
                commentView.setCommentDescription(comment.getCommentDescription());
                commentView.setFullName(comment.getUser().getUserFullName());
                commentView.setCommentDate(comment.getCommentDate());
                commentViews.add(commentView);
            }
        }

        return commentViews;
    }





}
