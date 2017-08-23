export class Customer {
    id: string | '';
    name: string | '';
    mobile: string | '';
    dob: string | '';
    email: string | '';
    addresses: Addresses [];
};

class Addresses {
    hNo: string='';
    street: string='';
    city: string='';
    state: string='';
    pinCode: string='';
};