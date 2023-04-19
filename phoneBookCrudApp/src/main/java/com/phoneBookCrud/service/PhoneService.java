package com.phoneBookCrud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneBookCrud.entity.Phone;
import com.phoneBookCrud.repository.PhoneRepository;

@Service
public class PhoneService {
	
	@Autowired
	PhoneRepository phoneRepo;
	
	public Phone addPhone(Phone phone) {
		return phoneRepo.save(phone);
	}
	
	public List<Phone> getAllPhone(){
		return phoneRepo.findAll();
	}
	
	public void deleteContact(long contactId) {
		
		phoneRepo.deleteById(contactId);
		
	}
	
	public Phone getContactId(long contactId) {
		return phoneRepo.findById(contactId).get();
	}

	

}
