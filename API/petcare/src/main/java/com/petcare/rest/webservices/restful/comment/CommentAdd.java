package com.petcare.rest.webservices.restful.comment;

import lombok.Data;

@Data
public class CommentAdd {

    Integer productId;
    String username;
    String commentDescription;
}
