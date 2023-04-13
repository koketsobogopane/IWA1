// script.js

const root1 = document.querySelector('[data-key = order1] ')

const biscuits1 = root1.dataset.biscuits
const donut1 = root1.dataset.donut
const pancake1 = root1.dataset.pancake
const status1 = root1.dataset.status
    //  '1-donuts': document.querySelector('donuts'),
    //  '1-pancakes': document.querySelector('pancakes'),
    //  '1-status': document.querySelector('status'),}}

// const root2 = {
//     // document(order2)
//  '2-biscuits': document.querySelector('biscuits'),
//  '2-donuts': document.querySelector('donuts'),
//  '2-pancakes': document.querySelector('pancakes'),
//  '2-status': document.querySelector('status'),}

// const root3 = {
//     // document(order3),
//  '3-biscuits': document.querySelector(biscuits),
//  '3-donuts': document.querySelector(donuts),
//  '3-pancakes': document.querySelector(pancakes),
//  '3-status': document.querySelector(status)}

document.querySelector("div.biscuits dd.count").innerHTML = biscuits1,
document.querySelector("div.donuts dd.count").innerHTML = donut1,
document.querySelector("div.pancakes dd.count").innerHTML = pancake1
document.querySelector("div.status dd.count").innerHTML = status1 ? Delivered : Pending

// '2-biscuits'= 2-root.biscuits,
// '2-donuts' = 2-root.donuts,
// '2-pancakes' = 2-root.pancakes,
// '2-status' = 2-root.status ? Delivered : Pending

// '3-biscuits' = 3-root.biscuits,
// '3-donuts' = 3-root.donuts,
// '3-pancakes' = 3-root.pancakes,
// '3-status' = 3-root.status ? Delivered : Pending 