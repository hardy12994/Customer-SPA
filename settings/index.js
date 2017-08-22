"use strict";
let async = require('async');
let database = require('./database');
let routes = require('./routes');
let globals = require('./globals');


module.exports.configure = (app) => {

    async.waterfall([
        function(cb) {
            database.configure(cb);
        },
        function(cb) {
            routes.configure(app);
            cb(null);
        }
    ], function(err) {
        if (err) {
            console.error(err);
            return;
        }
    });
};