package com.boot.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.boot.student.Details;

@Controller
//this will return pages
public class BootController {

	@RequestMapping("/")
	public String home() {
		return "index";
	}
	
	@RequestMapping("/home")
	public String error() {
		return "home";
	}
	

	@RequestMapping("/readJSON2")
	public @ResponseBody Map<String, Object> readJSON() {
		System.out.println(new com.boot.student.Details("taraq","k","taraq.sai@gmail.com","vja").getEmail());
		Map<String, Object> returnMap = new HashMap<String, Object>();
		com.boot.student.Details details = new com.boot.student.Details("taraq","k","taraq.sai@gmail.com","vja");
		List<Details> detailsList = new ArrayList<Details>();
		detailsList.add(details);
		returnMap.put("status", "success");
		returnMap.put("response", detailsList);
		return returnMap;
	}
	
}
