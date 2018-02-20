package com.boot.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.boot.student.Details;

@Repository("mvcDao")
@Transactional
public class BootDAOImpl implements BootDAO{

	@Override
	public List<Details> getUsersList() {
		System.out.println("BootServiceImpl : getUsersList");
			
		return null;
	}

}
