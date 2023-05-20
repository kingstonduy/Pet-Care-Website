package com.petcare.rest.webservices.restful.user;


import lombok.Data;

@Data
public class UserChangeInformation {

    private Integer userId;

    private String username;
    private String password;

    private String currentPassword;
    private String email;

    private String fullName;
}
