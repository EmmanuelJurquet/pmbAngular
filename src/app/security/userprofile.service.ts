  import { Injectable } from '@angular/core';

  @Injectable({providedIn: 'root'})
  export class UserprofileService {

    public  firstname: string;
    public  lastname: string;
    public  email: string;
    public  birthdate: Date;
    public  address: string;
    public  phone: string;
    public  city: string;
    public  zip: string;

    constructor() {

    this.firstname = '',
    this.lastname = '',
    this.email = '',
    this.birthdate =  new Date(),
    this.address = '',
    this.phone = '',
    this.city = '',
    this.zip = '';

  }


}
