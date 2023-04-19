package com.phoneBookCrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.phoneBookCrud.entity.Phone;

@Repository
public interface PhoneRepository extends JpaRepository<Phone, Long> {

}
