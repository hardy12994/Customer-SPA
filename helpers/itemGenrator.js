"use strict";

let items = [{
    name: 'laptop',
    rate: 45000,
    quantity: 1
}, {
    name: 'laptop-charger',
    rate: 15000,
    quantity: 1
}, {
    name: 'headphones',
    rate: 1000,
    quantity: 4
}, {
    name: 'mobile',
    rate: 10000,
    quantity: 2
}, {
    name: 'mobile-charger',
    rate: 1000,
    quantity: 1
}, {
    name: 'bagpack',
    rate: 1000,
    quantity: 1
}, {
    name: 'pendrive',
    rate: 500,
    quantity: 2
}, {
    name: 'backup',
    rate: 2000,
    quantity: 2
}, {
    name: 'otg-cable',
    rate: 200,
    quantity: 4
}, {
    name: 'speakers',
    rate: 2000,
    quantity: 1
}];


exports.getItems = () => {

    let noOfItems = Math.trunc(Math.random() + 1) + 1;
    return items.slice(0, noOfItems);
};