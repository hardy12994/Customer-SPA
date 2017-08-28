import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from "app/services/customer.service";
import { Customer } from "app/models/customers";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  customers: Customer[]=[];

  constructor(private router: Router,
    private customerService: CustomerService) {
    // console.log(this.customerService);
    this.getAllCustomers();
  }

  getAllCustomers() {

    this.customerService.customer.search({})
      .subscribe((items: Customer[]) => {
        this.customers = items;
      },
      err => {
        console.log(`Error while feting all customers : ${err}`);
      })
  }

  add() {
    this.router.navigateByUrl('/customers/new');
  }
  
  delete(item) {
    this.customerService.customer.delete(item.id)
      .subscribe(data=>{
        console.log('customer deleted');
        this.getAllCustomers();
      },err=>{
        console.log(err);
      },()=>{
        console.log('deletion completed');
      })

  }


  ngOnInit() {
  }

}
