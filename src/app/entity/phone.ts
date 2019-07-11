export class Phone {
  id: number;
  number: string;
  type: string;
  person: string;


  constructor(number: string, person: string, type) {
    this.number = number;
    this.person = person;
    this.type = type;
  }
}
