"use strict";

let generator = require('express-app-generator');
let settings = require('./settings');
let port = process.env.PORT || 3000;

generator.generate(port, function(err, app) {
    if (err) {
        console.error('Server Setup Failed');
        return;
    }
    settings.configure(app);
});