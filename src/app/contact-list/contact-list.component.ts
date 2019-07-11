import { Component, OnInit } from '@angular/core';
import {ApiContactService} from "../services/api-contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(public contactService: ApiContactService) { }

  ngOnInit() {
    // for (let item of this.contactService.contactList) {
    //   if (item.phones.length > 0){
    //     for (let elem of item.phones){
    //       this.contactService.getPhone(elem.number)
    //     }
    //   }
    //
    // }
    // console.log(this.contactService.phoneList);

  }

}
