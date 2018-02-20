package com.boot.Controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boot.Service.BootService;
import com.boot.student.Details;

@RestController
//this will return REST response
public class SpringRestController {

	@Autowired
	BootService bootService;
	
	/*Web Services Built with Boot*/
	@RequestMapping("/hello")
	public String hello(@RequestParam String name) {
		return "Hello "+name;
	}
	

	@RequestMapping("/readJSON")
	public Map<String, Object> readJSON() {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		com.boot.student.Details details = new com.boot.student.Details("taraq","k","taraq.sai@gmail.com","vja");
		
		
		List<Details> detailsList = new ArrayList<Details>();
		detailsList.add(details);
		returnMap.put("status", "success");
		returnMap.put("response", detailsList);
		return returnMap;
	}
	
	@RequestMapping("/getUsersList")
	public Map<String, Object> getUsersList() {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		/*com.boot.student.Details details = new com.boot.student.Details("taraq","k","taraq.sai@gmail.com","vja");
		
		List<Details> detailsList = new ArrayList<Details>();
		detailsList.add(details);
		returnMap.put("status", "success");
		returnMap.put("response", detailsList);
		*/
		List<Details> usersList = bootService.getUsersList();
		
		return returnMap;
	}
	
}
