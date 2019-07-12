import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from "../entity/person";
import {Phone} from "../entity/phone";

@Injectable({
  providedIn: 'root'
})
export class ApiContactService {
  contactList: Array<Person> = [];
  phoneList: Array<Phone> = [];



  constructor(private httpClient: HttpClient) {
    this.load();
  }

  private load(): void {
    this.contactList = [];
    this.getAllContact();
  }

  getAllContact(): void {
    this.httpClient.get('http://127.0.0.1:8000/people').subscribe((results: Array<object>) => {
      this.contactList = results.map((obj: object) => {

        return Object.assign(new Person('',''), obj);

      });
      console.log(this.contactList);
    });
  }

  getPhone(id: Person): void {
    this.phoneList = [];
    for (let item of id.phones){
      this.httpClient.get('http://127.0.0.1:8000' + item).subscribe((phone: Phone) => {
        return this.phoneList.push(Object.assign(new Phone('','', ''), phone))
      });
    }
    };

  addPhone(phone): void {
    this.httpClient.post('http://127.0.0.1:8000/phones', phone).subscribe(() => {
      console.log('ok');
    })
  }

  updatePerson(contact: Person): void {
    this.httpClient.put('http://127.0.0.1:8000/people/' + contact.id, contact).subscribe(() => {
      console.log('contact updated');
    })
  }

  addPerson(contact: Person): void {
    this.httpClient.post('http://127.0.0.1:8000/people', contact).subscribe(() => {
      console.log('contact added');
    })
  }

  deletePerson(id): void {
    this.httpClient.delete('http://127.0.0.1:8000/people/' + id).subscribe(() => {
      console.log('contact deleted');
    })
  }

  deletePhone(id): void {
    this.httpClient.delete('http://127.0.0.1:8000/phones/' + id).subscribe(() => {
      console.log('phone deleted');
    })
  }
}
