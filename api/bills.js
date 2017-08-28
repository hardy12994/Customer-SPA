"use strict";
let db = global.db;
let async = require('async');
let _ = require('underscore');
let moment = require('moment');
let itemHelper = require('../helpers/itemGenrator');
let autoGenBills = false;
let mapper = require('../mappers/bill');




// random insertion of thousand of records
//dummy
if (autoGenBills) {
    (function() {

        async.waterfall([
                function(cb) {
                    db.customer.findOne({}, cb);
                },
                function(customer, cb) {
                    let inc = 0;
                    let count = [];
                    count.length = 500;

                    async.eachSeries(count, (item, callme) => {

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
                                number: inc++,
                                date: Date.now(),
                                customer: customer,
                                tax: tax,
                                discount: discount,
                                items: purchaseItems,
                                amount: amount
                            })
                            .save(function(err, data) {
                                if (err) {
                                    return callme(err);
                                }

                                callme(null);
                            });
                    }, function(err, data) {
                        if (err) {
                            return cb(err);
                        }
                        cb(null);
                    });
                }
            ],
            function(err, data) {
                if (err) {
                    return console.error('err found while billing');
                }
                console.log('bill created');
            });
    })();

}


exports.search = function(req, res) {

    db.bill.aggregate([{
        $group: {
            _id: '$customer',
            avgAmt: { $avg: '$amount' },
            totalAmt: {
                $sum: '$amount'
            },
            count: { $sum: 1 }
        }
    }, {
        $lookup: {
            from: 'customers',
            localField: '_id',
            foreignField: '_id',
            as: 'customerDoc'
        }
    }]).exec(function(err, data) {
        if (err) {
            return res.failure(err);
        }
        // data.customer = data.customerDoc[0];
        res.page(mapper.toSearchModel(data));
    });
};