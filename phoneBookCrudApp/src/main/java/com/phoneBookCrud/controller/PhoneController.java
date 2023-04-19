package com.phoneBookCrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.phoneBookCrud.entity.Phone;
import com.phoneBookCrud.service.PhoneService;


@RestController
@CrossOrigin(origins = "*")
public class PhoneController {
	
	@Autowired
	PhoneService phoneSer;
	
	@PostMapping({"/addContact"})
	public Phone addPhone(@RequestBody Phone phone) {
		return phoneSer.addPhone(phone);
	}
	
	@GetMapping({"/getContact"})
	public List<Phone> getAllContact(){
		return phoneSer.getAllPhone();
	}
	
	@DeleteMapping({"/deleteContact/{contactId}"})
	public void deleteContact(@PathVariable("contactId") long contactId) {
		phoneSer.deleteContact(contactId);
	}
	
	@GetMapping({"/getContactId/{contactId}"})
	public Phone getContactId(@PathVariable("contactId") long contactId) {
		return phoneSer.getContactId(contactId);
	}
}
