"use strict";

let _ = require('underscore');

exports.toModel = entity => {
    let model = {
        id: entity.id,
        name: entity.name,
        email: entity.email,
        dob: entity.dob,
        mobile: entity.mobile,
        addresses: []
    };

    if (!_.isEmpty(entity.addresses)) {
        _.each(entity.addresses, (item) => {

            model.addresses.push({
                hNo: item.hNo,
                street: item.street,
                city: item.city,
                state: item.state,
                pinCode: item.pinCode
            });

        });
    }

    return model;

};

exports.toSearchModel = entities => {

    return entities.map(entity => {
        return exports.toModel(entity);
    });
};