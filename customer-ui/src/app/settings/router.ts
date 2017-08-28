import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from "app/components/customers/customers.component";
import { BillsComponent } from "app/components/bills/bills.component";
import { NewCustomerComponent } from 'app/components/new-customer/new-customer.component';
import { NgModule } from '@angular/core';
import { CustomerEditComponent } from 'app/components/customer-edit/customer-edit.component';


const appRoutes: Routes = [
    { path: 'customers', component: CustomersComponent },
    { path: 'customers/new', component: NewCustomerComponent },
    { path: 'customers/:id', component: CustomerEditComponent },
    { path: 'bills', component: BillsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'customers' }
]



@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }
