package com.petcare.rest.webservices.restful.comment;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

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


    @PostMapping("comment/user/product")
    public ResponseEntity<Comment> addCommentByUserToProduct(@RequestBody CommentAdd commentAdd){
        System.out.println(commentAdd);
        Comment comment = commentService.postCommentByUserAndProduct
                (commentAdd.getUsername(),commentAdd.getProductId(),commentAdd.getCommentDescription());

        if(comment != null){
            commentService.addComment(comment);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

}
