import { Component, OnInit } from '@angular/core';
import {ApiContactService} from "../services/api-contact.service";
import {Person} from "../entity/person";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(public contactService: ApiContactService) { }

  ngOnInit() {

  }

  addContact(firstName, lastName){
    const contact = new Person(firstName, lastName);
    this.contactService.addPerson(contact);
  }
}
