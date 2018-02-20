package com.boot.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@ComponentScan("com.boot")

@SpringBootApplication
public class SpringBootNGXXApplication {
	//CORS Filter
	@Bean
	public WebMvcConfigurer CorsFilter() {
	    return new WebMvcConfigurerAdapter() {
	        @Override
	        public void addCorsMappings(CorsRegistry registry) {
	            registry.addMapping("/readJSON").allowedOrigins("http://localhost:4200");
	        }
	    };
	}
	
	
	public static void main(String[] args) {
		
		SpringApplication.run(SpringBootNGXXApplication.class, args);
	
	}
}
