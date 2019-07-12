import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiContactService} from "../services/api-contact.service";
import {Phone} from "../entity/phone";
import {Person} from "../entity/person";

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})
export class NumberListComponent implements OnInit {

  contact: Person;
  editContact: Person = new Person('','');
  numberlist: Array<Phone> = [];
  constructor(public contactService: ApiContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {

      this.contact = this.contactService.contactList[params.index];
      Object.assign(this.editContact, this.contact);
    });
    this.contactService.getPhone(this.editContact)
  }

  handleForm() {
    Object.assign(this.contact, this.editContact);
    this.contactService.updatePerson(this.contact);
  }

  addnumber(number, type) {
    const newphone = new Phone(number, 'people/' + this.contact.id, type);
    this.contactService.addPhone(newphone);
    console.log(newphone);
  }
}
