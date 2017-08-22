import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from "app/components/customers/customers.component";
import { BillsComponent } from "app/components/bills/bills.component";
import { NgModule } from '@angular/core';


const appRoutes:Routes=[
    { path: 'customers', component: CustomersComponent },
    { path: 'bills', component: BillsComponent}
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
