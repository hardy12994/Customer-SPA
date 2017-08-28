import { Component, OnInit } from '@angular/core';
import { BillService } from "app/services/bill.service";
import { Bill } from "app/models/bills";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
  providers: [BillService]
})
export class BillsComponent implements OnInit {

  reports: Bill[] = [];


  constructor(private billService:BillService) {
   

   this.getAllReports()

   }

  getAllReports() {

    this.billService.bills.search({})
      .subscribe((items: Bill[]) => {
        this.reports = items;
        console.log(this.reports);
        
      },
      err => {
        console.log(`Error while feting all customers : ${err}`);
      })
  }


  ngOnInit() {
  }

}
