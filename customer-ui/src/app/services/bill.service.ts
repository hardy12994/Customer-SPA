import { Injectable } from '@angular/core';
import { Bill } from "../models/bills";
import { GenricApi } from "../genrics/api";
import { Http } from "@angular/http";
import { IApi } from "app/genrics/apiInterface";


@Injectable()
export class BillService {
  bills: IApi<Bill>;

  constructor(private http: Http) {
    this.bills = new GenricApi<Bill>('bills', http);
  }

}
