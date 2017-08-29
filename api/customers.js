"use strict";
let db = global.db;
let async = require('async');
let moment = require('moment');
let mapper = require('../mappers/customer');

exports.create = (req, res) => {

    var body = req.body;

    if (!(body.name && body.email && body.mobile)) {
        return res.failure('mobile - email - name are required');
    }

    async.waterfall([
        function(cb) {
            db.customer.findOne({
                email: body.email,
                mobile: body.mobile
            }, function(err, customer) {
                if (err) {
                    return cb(err);
                }
                if (customer) {
                    return cb('already have this customer');
                }
                cb(null);
            });
        },
        function(cb) {
            new db.customer(body)
                .save(cb);
        }
    ], function(err, data) {
        if (err) {
            return res.failure(err);
        }
        res.data(mapper.toModel(data));
    });
};

exports.update = (req, res) => {

    let customerId = req.params.id;
    let body = req.body;

    async.waterfall([
        function(cb) {
            async.parallel({
                customer: function(cb) {
                    db.customer.findById(customerId, function(err, customer) {
                        if (err) {
                            return cb(err);
                        }
                        if (!customer) {
                            return cb('no customer found to edit');
                        }
                        cb(null, customer);
                    });
                },
                existing: function(cb) {

                    if (!body.mobile || !body.email) {
                        return cb(null);
                    }

                    db.customer.findOne({
                        _id: {
                            $ne: customerId
                        },
                        $or: [{
                            mobile: body.mobile
                        }, {
                            email: body.email
                        }]
                    }, function(err, existingCustomer) {
                        if (err) {
                            return cb(err);
                        }
                        if (!existingCustomer) {
                            return cb(null);
                        }

                        if (existingCustomer.email === body.email) {
                            return cb('this email already exist');
                        }

                        if (existingCustomer.mobile === body.mobile) {
                            return cb('this mobile already exist');
                        }
                    });
                }
            }, function(err, result) {
                if (err) {
                    return cb(err);
                }

                cb(null, result.customer);

            });
        },
        function(customer, cb) {
            for (var index in body) {
                customer[index] = body[index];
            }
            customer.save(function(err, data) {
                if (err) {
                    return cb(err);
                }
                cb(null, data);
            });
        }
    ], function(err, customer) {
        if (err) {
            return res.failure(err);
        }
        res.data(mapper.toModel(customer));
    });


};

exports.get = (req, res) => {


    db.customer.findById(req.params.id)
        .exec(function(err, customer) {
            if (err) {
                return res.failure(err);
            }
            res.data(mapper.toModel(customer));
        });
};


exports.search = (req, res) => {

    var query = {};
    var pageSize = Number(req.query.pageSize);
    var pageNo = Number(req.query.pageNo);
    var fromPage = (pageSize * pageNo) - pageSize;
    var toPage = pageSize * pageNo;


    if (req.query.name && req.query.name !== "null" && req.query.name !== null) {
        query.name = {
            $regex: req.query.name,
            $options: 'i'
        };
    }

    if (req.query.mobile && req.query.mobile !== "null" && req.query.mobile !== null) {
        query.mobile = {
            $regex: req.query.mobile,
            $options: 'i'
        };
    }

    if (req.query.dob && req.query.dob !== "null" && req.query.dob !== null) {
        query.dob = {
            $gte: moment(req.query.dob).set("hours", 0).set("minutes", 0).set("seconds", 0).set("milliseconds", 0),
            $lte: moment(req.query.dob).set("hours", 0).set("minutes", 0).set("seconds", 0).set("milliseconds", 0).add(1, "day")
        };
    }

    if (req.query.address) {
        query.addresses = {
            $or: [{
                hNo: {
                    $regex: req.query.address,
                    $options: 'i'
                }
            }, {
                street: {
                    $regex: req.query.address,
                    $options: 'i'
                }
            }, {
                city: {
                    $regex: req.query.address,
                    $options: 'i'
                }
            }, {
                state: {
                    $regex: req.query.address,
                    $options: 'i'
                }
            }, {
                pinCode: {
                    $regex: req.query.address,
                    $options: 'i'
                }
            }]
        };
    }


    db.customer.find(query)
        .skip(fromPage)
        .limit(toPage)
        .exec(function(err, customers) {
            if (err) {
                return res.failure(err);
            }
            res.page(mapper.toSearchModel(customers));
        });

};

exports.delete = (req, res) => {
    let customerId = req.params.id;

    async.parallel([
        function(cb) {
            db.bill.remove({
                customer: customerId
            }, cb);
        },
        function(cb) {
            db.customer.remove({
                _id: customerId
            }, cb);
        }
    ], function(err) {
        if (err) {
            return res.failure(err);
        }
        res.success('customer deleted');
    });
};