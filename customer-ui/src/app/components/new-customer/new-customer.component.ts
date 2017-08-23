import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from "app/services/customer.service";
import { Customer } from "../../models/customers";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
  providers: [CustomerService]

})
export class NewCustomerComponent implements OnInit {


  newCustomer: Customer;

  constructor(private router: Router,
    private customerService: CustomerService) {

    console.log(this.newCustomer);
      
      this.newCustomer=new Customer();
      console.log(this.newCustomer);
      
     }


  add(newCustomer){
    this.customerService.customer.create(newCustomer,'customers')
  .subscribe(data=>{
    console.log(data);
  })
}

  ngOnInit() {
  }

}
