package com.phoneBookCrud.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Phone {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long contactId;
	private String firstName;
	private String lastName;
	private long   number;
	
	public Phone() {}
	
	
	public Phone(String firstName, String lastName, long number) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.number = number;
	}


	public long getContactId() {
		return contactId;
	}
	public void setContactId(long contactId) {
		this.contactId = contactId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
	@Override
	public String toString() {
		return "Phone [contactId=" + contactId + ", firstName=" + firstName + ", lastName=" + lastName + ", number="
				+ number + "]";
	}
	
	
	
	
	

}
