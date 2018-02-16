package com.boot.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
/*Web services controller*/
@RestController
public class BootRestController {

	@Autowired
	PropertiesConfig propertiesConfig;
	
	/*Web Services Built with Boot*/
	@RequestMapping("/hello")
	public String hello(@RequestParam String name) {
		return "Hello "+name;
	}
	

	@RequestMapping("/testName")
	public String testName(@RequestParam String name) {
		return propertiesConfig.getGreeting() + name;
	}
	
}
