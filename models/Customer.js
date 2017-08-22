"use strict";
let mongoose = require('mongoose');

let customer = new mongoose.Schema({

    name: String,
    mobile: String,
    addresses: [{
        hNo: String,
        street: String,
        city: String,
        state: String,
        pinCode: String
    }],
    dob: Date,
    email: String
});

mongoose.model('customer', customer);