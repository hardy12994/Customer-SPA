import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from "./settings/router";
import { AppComponent } from './components/root/app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BillsComponent } from './components/bills/bills.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { FormsModule } from "@angular/forms";
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    BillsComponent,
    NewCustomerComponent,
    CustomerEditComponent
  ],
  imports: [
    // MaterialModule.forRoot(),
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
