import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Phone } from './phone.model';
import { Observable, of } from 'rxjs';
import { ContactServiceService } from './contact-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Phone> {

  constructor(private conSer:ContactServiceService){}

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Phone>{
    
    const id:any = route.paramMap.get("contactId")

    if(id){
      return this.conSer.getContactById(id)
    }else{
        return of(this.getCont())
    }

  }

  getCont(){
    return{
      contactId:'',
      firstName:'',
      lastName:'',
      number:''

    }
  }
 
}
