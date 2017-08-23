import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from "app/services/customer.service";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  constructor(private router: Router,
    private customerService: CustomerService) {
    console.log(this.customerService);
  }

  add(){
    this.router.navigateByUrl('/customers/new');
  }


  ngOnInit() {
  }

}
