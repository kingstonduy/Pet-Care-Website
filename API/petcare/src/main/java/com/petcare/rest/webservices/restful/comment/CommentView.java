package com.petcare.rest.webservices.restful.comment;


import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class CommentView {
    Integer commentId;
    String commentDescription;

    String fullName;

    LocalDate commentDate;

}
