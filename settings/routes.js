"use strict";

exports.configure = app => {


    app.get('/', function(req, res) {
        res.render('index', { title: '* THIS IS Customer-SPA API *' });
    });

    let api = app.appRouter;
};