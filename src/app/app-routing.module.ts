import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NumberListComponent} from "./number-list/number-list.component";
import {ContactListComponent} from "./contact-list/contact-list.component";

const routes: Routes = [
  {path: '', component: ContactListComponent},
  {path: 'editcontact/:index', component: NumberListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
