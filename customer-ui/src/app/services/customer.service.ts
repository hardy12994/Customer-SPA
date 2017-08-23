import { Injectable } from '@angular/core';
import { Customer } from "../models/customers";
import { GenricApi } from "../genrics/api";
import { Http } from "@angular/http";
import { IApi } from "app/genrics/apiInterface";
// import { Customer } from "../models/customers";


@Injectable()
export class CustomerService {
  customer: IApi<Customer>;

  constructor(private http: Http) {
    // console.log(GenricApi);

    this.customer = new GenricApi<Customer>('customers',http);
  }



}
