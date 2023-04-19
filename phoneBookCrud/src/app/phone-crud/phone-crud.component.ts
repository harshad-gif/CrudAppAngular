import { Component,OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-crud',
  templateUrl: './phone-crud.component.html',
  styleUrls: ['./phone-crud.component.css']
})
export class PhoneCrudComponent implements OnInit {

  contact:any=null

  constructor
  (
    private conSer:ContactServiceService,
    private router:Router
  ){}


  ngOnInit(): void {
    this.getAllContact()
  }

  getAllContact(){
    this.conSer.getContact().subscribe(
      (res)=>{
        console.log(res)
        this.contact = res
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  deleteContact(contactId:any){
    this.conSer.deleteContact(contactId)
    .subscribe(
      (res)=>{
        console.log(res)
        this.getAllContact()
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  update(contactId:any){

    this.router.navigate(["/add",{contactId:contactId}])

  }

}
