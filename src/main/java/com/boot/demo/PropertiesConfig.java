package com.boot.demo;

import org.springframework.stereotype.Component;

@Component
public class PropertiesConfig {
	
	private String greeting = "Welcome ---";
	
	public PropertiesConfig() {
        System.out.println("PropertiesConfig() called");
    }
	
	public String getGreeting() {
		return greeting;
	}

	public void setGreeting(String greeting) {
		this.greeting = greeting;
	}

}
