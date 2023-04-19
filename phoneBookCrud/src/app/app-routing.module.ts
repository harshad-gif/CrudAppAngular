import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { PhoneCrudComponent } from './phone-crud/phone-crud.component';
import { ContactResolverService } from './contact-resolver.service';

const routes: Routes = [
  { path: '', component: PhoneCrudComponent, pathMatch: 'full' },
  {path:'add',component:AddContactComponent,resolve:{phone:ContactResolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
