import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from "app/services/customer.service";
import { Customer, Address } from "../../models/customers";
import { ValidatorService } from "app/services/validator.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
  providers: [
    CustomerService,
    ValidatorService
  ]
})

export class NewCustomerComponent implements OnInit {


  customer: Customer = new Customer;
  count=1;


  constructor(private router: Router,
    private customerService: CustomerService,
    private validatorService: ValidatorService) {
    this.addressInc();
  }


  addressInc() {
    let address: Address = new Address();
    this.customer.addresses.push(address);
    console.log(this.customer);
  }

  back() {
    this.router.navigate(['../']);
  }





  add() {
    this.customerService.customer.create(this.customer)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['../']);
      },
      err => console.log(err))
  }

  ngOnInit() {
    console.log(this.customer);
  }
}
