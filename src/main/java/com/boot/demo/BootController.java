package com.boot.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BootController {

	@RequestMapping("/")
	public String home() {
		return "index";
	}
	
	@RequestMapping("/home")
	public String error() {
		return "home";
	}
	
	
	
}
