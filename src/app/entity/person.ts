import {Phone} from "./phone";

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  birthAt: Date;
  notes: string;
  phones: Array<Phone>;


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.notes = '';
    this.birthAt = new Date()
  }
}
