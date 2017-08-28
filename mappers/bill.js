"use strict";

let _ = require('underscore');

exports.toModel = entity => {
    let model = {
        id: entity.id,
        avgAmt: entity.avgAmt,
        totalAmt: entity.totalAmt,
        count: entity.count
    };

    if (entity.customerDoc) {

        model.customer = {
            name: entity.customerDoc[0].name,
            email: entity.customerDoc[0].email,
            mobile: entity.customerDoc[0].mobile
        };

    }

    return model;

};

exports.toSearchModel = entities => {

    return entities.map(entity => {
        return exports.toModel(entity);
    });
};