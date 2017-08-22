'use strict';
var fs = require('fs');
var join = require('path').join;
var mongoose = require('mongoose');
var Promise = require("bluebird");
Promise.promisifyAll(mongoose);

var appRoot = require('app-root-path');
var dbConfig = require('config').get('db');
var logger = require('../helpers/logger')('database');


let configureDBModels = function() {

    fs.readdirSync(join(__dirname, '../models'))
        .forEach(function(file) {
            if (file.indexOf('.js')) {
                require(join(__dirname, '../models', file));
            }
        });
    global.db = mongoose.models;

};

module.exports.configure = function(cb) {

    var connect = function() {
        mongoose.connect(dbConfig.url);
    };

    connect();

    var db = mongoose.connection;

    db.on('connected', function() {
        logger.info('DB Connected');
        configureDBModels();
        cb(null);
    });

    db.on('error', function(err) {
        // logger.error('Mongoose default connection error: ' + err);
        cb('Mongoose default connection error: ' + err);
    });

    db.on('disconnected', function() {
        logger.info('Again going to connect DB');
        connect();
    });
};