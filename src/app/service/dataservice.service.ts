import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  users: any = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
      return of(this.users);
    } else {
      return this.http.get('../../assets/Dummy_users.json');
    }
  }

  storeUsers(data: any) {
    this.users = data;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getSingleData(id: any) {
    return this.users.find((h: any) => h.id === +id);
  }

  public updateUser(id: any, user: any) {
    let index = this.users.findIndex((h: any) => h.id === +id);
    this.users[index].firstName = user.personal.firstName;
    this.users[index].age = user.personal.age;
    this.users[index].email = user.personal.email;
    this.users[index].macAddress = user.personal.macAddress;
    this.users[index].birthDate = user.personal.birthDate;
    this.users[index].address.address = user.address.address;
    this.users[index].address.city = user.address.city;
    this.users[index].address.state = user.address.state;
    this.users[index].address.postalCode = user.address.postalcode;
    this.users[index].cardNumber = user.bank.cardnum;
    this.users[index].cardExpire = user.bank.cardexpire;
    this.users[index].iban = user.bank.iban;
    this.users[index].cardType = user.bank.cardtype;
    this.users[index].currency = user.bank.currency;
    this.users[index].company.address.address = user.companyAddress.address;
    // this.users[index].company.address.city = user.companyAddress.city;
    this.users[index].company.address.state = user.companyAddress.state;
    this.users[index].company.address.postalCode =
      user.companyAddress.postalcode;
    this.users[index].company.department = user.companyAddress.department;
    this.users[index].company.title = user.companyAddress.title;
    this.storeUsers(this.users);
  }
}
