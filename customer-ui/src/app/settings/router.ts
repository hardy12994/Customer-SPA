import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from "app/components/customers/customers.component";
import { BillsComponent } from "app/components/bills/bills.component";
import { NewCustomerComponent } from 'app/components/new-customer/new-customer.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    {
        path: 'customers', component: CustomersComponent
    },
    { path: 'customers/new', component: NewCustomerComponent },
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
