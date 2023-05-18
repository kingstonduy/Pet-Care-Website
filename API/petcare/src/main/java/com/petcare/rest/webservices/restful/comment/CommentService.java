package com.petcare.rest.webservices.restful.comment;

import com.petcare.rest.webservices.restful.orderedproduct.OrderedProduct;
import com.petcare.rest.webservices.restful.orderedproduct.OrderedProductRepository;
import com.petcare.rest.webservices.restful.product.Product;
import com.petcare.rest.webservices.restful.product.ProductRepository;
import com.petcare.rest.webservices.restful.user.User;
import com.petcare.rest.webservices.restful.user.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Service
public class CommentService {

    ProductRepository productRepository;

    CommentRepository commentRepository;

    UserRepository userRepository;

    public CommentService(ProductRepository productRepository,CommentRepository commentRepository
    ,UserRepository userRepository) {
        this.productRepository = productRepository;
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }


    public List<Comment> comments(){
        return commentRepository.findAll();
    }

    public void addComment(Comment comment){
        commentRepository.save(comment);
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


    public Comment postCommentByUserAndProduct(String username, Integer id, String commentContent){

        Product product = productRepository.findById(id).get();

        User user = userRepository.findByUserUserName(username);



        if(product != null && user != null){

            Comment comment = new Comment();

            comment.setUser(user);
            comment.setProduct(product);
            comment.setCommentDate(LocalDate.now());
            comment.setCommentDescription(commentContent);
            return comment;
        }

        return null;
    }






}
