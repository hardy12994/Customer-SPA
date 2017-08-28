import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  phoneNumberLength: number = 10;
  textLength: number = 100;
  pinCodeLength: number = 6;
  states: string[] = [
    'Jummu Kashmir',
    'Uttar Pardesh',
    'Himachal Pardesh',
    'Bihar',
    'Andhara Pardeh',
    'Arunachal Pardesh',
    'Assam',
    'Chhattisgarh',
    'Goa',
    'Gujrat',
    'Haryana',
    'Punjab',
    'Jharkhand',
    'Karnataka',
    'Kerla',
    'Madhya Pardeh',
    'Maharahstra',
    'Manipur',
    'Uttrakhand',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orrisa',
    'Rajasthan',
    'Sikkim',
    'TamilNadu',
    'Telengana',
    'Tripura',
    'WestBengal'
  ]

  constructor() { }

}
