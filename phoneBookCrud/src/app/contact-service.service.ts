import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from './phone.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http:HttpClient) { }

  public addContact(contact:any){
    return this.http.post<Phone>("http://localhost:8080/addContact",contact)
  }

  public getContact():Observable<Phone[]>{
    return this.http.get<Phone[]>("http://localhost:8080/getContact")
  }

  public deleteContact(contactId:any){
    return this.http.delete<any>("http://localhost:8080/deleteContact/"+contactId)
  }

  public getContactById(contactId:any){
    return this.http.get<any>("http://localhost:8080/getContactId/"+contactId)
  }
}
