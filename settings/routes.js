"use strict";

exports.configure = app => {

    let api = app.appRouter;

    app.get('/', function(req, res) {
        res.render('index', { title: '* THIS IS Customer-SPA API *' });
    });

    api.model('customers')
        .register('REST');

    api.model('bills')
        .register('REST');
};