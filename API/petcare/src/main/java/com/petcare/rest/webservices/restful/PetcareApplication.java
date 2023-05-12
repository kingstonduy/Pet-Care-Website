package com.petcare.rest.webservices.restful;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PetcareApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetcareApplication.class, args);
	}

}

/*
	/users
	get tat ca users



	/user/{username},{password}
	neu co thang nao exist <=> 200 <=> then
	else <=> !200 <=> catch

	product


	/products
	get tat ca products


	/product/{id}
	get cu the product nao

	/products/{category}
	get product theo category

	/products/inStock

	/product/outStock


	/coments/{userId}/{oderedProductId}
*/
