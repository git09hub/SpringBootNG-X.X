package com.boot.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.DAO.BootDAO;
import com.boot.student.Details;

@Service("mvcService")
public class BootServiceImpl implements BootService {

	@Autowired
	BootDAO bootDAO;
	
	@Override
	public List<Details> getUsersList() {
		System.out.println("BootServiceImpl : getUsersList");
		List<Details> usersList = bootDAO.getUsersList();
		//object to bean conversion goes here
		
		
		return usersList;
	}

}
