package com.petcare.rest.webservices.restful.comment;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class CommentController {

    CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }


    @GetMapping("/comments/product/{id}")
    public List<CommentView> getCommentsByProductId(@PathVariable Integer id) {
        return commentService.getCommentsByProductId(id);
    }

    @GetMapping("/comments")
    public List<Comment> getComments(){
        return commentService.comments();
    }


}
