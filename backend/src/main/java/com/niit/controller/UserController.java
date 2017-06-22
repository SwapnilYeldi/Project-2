package com.niit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.UsersDao;
import com.niit.model.Error;
import com.niit.model.Users;

@RestController
public class UserController {
	@Autowired
	private UsersDao usersDao;
	@RequestMapping(value="/registration",method=RequestMethod.POST)
	public ResponseEntity<?> registration(@RequestBody Users user){
		try{
		user.setEnabled(true);
		List<Users> users=usersDao.getAllUsers();
		
		for(Users u:users){
			if(u.getUsername().equals(user.getUsername())){
				Error error=new Error(2,"Username already exists");
				return new ResponseEntity<Error> (error,HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		usersDao.registration(user);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	
		}catch(Exception e){
			Error error=new Error(1,"Cannot register user details");
			return new ResponseEntity<Error>(error,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}