import { Component, OnInit } from '@angular/core';
import { CustomerService } from "app/services/customer.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Customer, Address } from "app/models/customers";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [CustomerService]
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService,
    private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.customerService.customer.get(params.id)
        .subscribe(data => {
          this.customer = data;
        });
    });

  }

  addressInc() {
    let address: Address = new Address();
    this.customer.addresses.push(address);
    console.log(this.customer);
  }

  update() {
    this.customerService.customer.update(this.customer.id,this.customer)
    .subscribe(
      data=>{
        this.router.navigateByUrl('/customers');
      },
      err => { 
        console.log(err);
      })

  }

  ngOnInit() {
  }

}
