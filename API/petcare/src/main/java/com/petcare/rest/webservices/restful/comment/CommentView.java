package com.petcare.rest.webservices.restful.comment;


import lombok.Data;

import java.util.Date;

@Data
public class CommentView {
    Integer commentId;
    String commentDescription;

    String fullName;

    Date commentDate;

}
