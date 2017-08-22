"use strict";
let mongoose = require('mongoose');

let bill = new mongoose.Schema({

    number: String, //auto inc
    date: Date,
    items: [{
        name: String,
        quantity: Number,
        rate: Number
    }],
    discount: Number, //in %
    tax: Date, //in %
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' }
});

mongoose.model('bill', bill);