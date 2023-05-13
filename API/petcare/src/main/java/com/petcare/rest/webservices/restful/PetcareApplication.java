package com.petcare.rest.webservices.restful;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class  PetcareApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetcareApplication.class, args);
	}

}

/*
	/users
	get tat ca users



	dung de login
	method= Post
	/user/{username},{password}
	neu co thang nao exist <=> 200 <=> then
	else <=> !200 <=> catch
	springboot thows exception

	product


	/products
	get tat ca products


	method= Get
	dung de chon product va bo vao cart
	/product/{id}
	get cu the product nao

	method= Get
	/products/{category}
	get product theo category

	/products/inStock

	/product/outStock


	/coments/{userId}/{oderedProductId}
*/
