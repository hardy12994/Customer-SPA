import { Customer } from "./customers";

export class Bill {
    id: string | '';
    avgAmt: string | '';
    totalAmt: string | '';
    count: string | '';
    customer: Customer= new Customer();
};
