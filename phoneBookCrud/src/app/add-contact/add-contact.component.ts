import { Component,OnInit } from '@angular/core';
import { Phone } from '../phone.model';
import { NgForm } from '@angular/forms';
import { ContactServiceService } from '../contact-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  
  showMsg:boolean = false

  btn1 = true
  txt = true
 


  phone:Phone={
    contactId:null,
    firstName:"",
    lastName:"",
    number:null

  }

  constructor(
    private contactSer:ContactServiceService,
    private router:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.phone = this.router.snapshot.data['phone']

    if(this.phone && this.phone.contactId){
      this.btn1 = false
      this.txt  = false
     
    }
  }

  addContact(contactForm:NgForm){
   this.contactSer.addContact(this.phone)
   .subscribe(
    (res:Phone)=>{
      console.log(res)
      
      contactForm.reset()
      
      
    },
    (error)=>{
      console.log(error)
    }
   )
  }

}
