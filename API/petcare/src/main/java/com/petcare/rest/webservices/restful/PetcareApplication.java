package com.petcare.rest.webservices.restful;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class  PetcareApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetcareApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsCongigurer(){
		return new WebMvcConfigurer(){
			public void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**")
						.allowedMethods("*")
						.allowedOrigins("http://localhost:3000");
			}
		};
	}

}

/*
	"/users"
	get tat ca users



	dung de login
	method= Post
	"/user/login"
	neu co thang nao exist <=> 200 <=> then
	else <=> !200 <=> catch
	springboot thows exception

	product


	"/products"
	get tat ca products


	method= Get
	dung de chon product va bo vao cart
	"/product/{id}"
	get cu the product nao

	method= Get
	"/products/{category}"
	get product theo category

	"/products/inStock"

	"/product/outStock"



	/coments/{userId}/{oderedProductId}
*/
