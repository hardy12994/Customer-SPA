"use strict";
let db = global.db;
let async = require('async');
let moment = require('moment');
let itemHelper = require('../helpers/itemGenrator');
let autoGenBills = false;




// random insertion of thousand of records
//dummy
if (autoGenBills) {
    let count = 0;
    (function() {

        if (count < 1000) {
            async.waterfall([
                    function(cb) {
                        db.customer.findOne({}, cb);
                    },
                    function(customer, cb) {
                        let discount = Math.trunc(Math.random() * 10) + 10;
                        let tax = 14;
                        let amount = 0;
                        let purchaseItems = itemHelper.getItems();

                        _.each(purchaseItems, item => {
                            amount = amount + item.quantity * item.rate;
                        });
                        let discountAmt = (amount * discount) / 100;
                        let taxAmt = (discountAmt * tax) / 100;
                        amount = amount - (discountAmt) + (taxAmt);

                        new db.bill({
                            number: count,
                            date: Date.now,
                            customer: customer,
                            tax: tax,
                            discount: discount,
                            items: purchaseItems,
                            amount: amount
                        }).save(function(err, data) {
                            if (err) {
                                return cb(err);
                            }
                            cb(null, data);
                        });
                    }
                ],
                function(err, data) {
                    if (err) {
                        return console.error('err found while billing');
                    }
                    console.log('bill created');
                });
        }
        count++;

    })();

}


exports.reports = function(req, res) {

    db.bill.aggregate([{
        $group: {
            _id: '$customer',
            avgAmt: { $avg: '$amount' }
        }
    }]);
};