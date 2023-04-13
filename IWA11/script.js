// script.js


const root1 = {
    biscuit1 : document.querySelector('[ data-biscuits="10"]'),
    donut1 : document.querySelector('[data-donuts="13" ]'),
    pancake1 : document.querySelector('[data-pancakes="0"]'),
    status1 : document.querySelector('[data-delivered= "false"]'),
}    

const root2 = {
    biscuit2 : document.querySelector('[ data-biscuits="5"]'),
    donut2 : document.querySelector('[data-donuts="0" ]'),
    pancake2 : document.querySelector('[data-pancakes="2"]'),
    status2 : document.querySelector('[data-delivered= "false"]'),
}    

const root3 = {
    biscuit3 : document.querySelector('[ data-biscuits="12"]'),
    donut3 : document.querySelector('[data-donuts="11" ]'),
    pancake3 : document.querySelector('[data-pancakes="15"]'),
    status3 : document.querySelector('[data-delivered= "true"]'),
}    

document.querySelector('dl[data-key= "order1"] div.biscuits dd.count').innerHTML = root1.biscuit1.dataset.biscuits
document.querySelector('dl[data-key= "order1"] div.donuts dd.count').innerHTML = root1.donut1.dataset.donuts
document.querySelector('dl[data-key= "order1"] div.pancakes dd.count').innerHTML = root1.pancake1.dataset.pancakes
document.querySelector('dl[data-key= "order1"] div.status dd').innerHTML = root1.status1.dataset.delivered === "false"? "pending" : "Delivered"

document.querySelector('dl[data-key= "order2"] div.biscuits dd.count').innerHTML = root2.biscuit2.dataset.biscuits
document.querySelector('dl[data-key= "order2"] div.donuts dd.count').innerHTML = root2.donut2.dataset.donuts
document.querySelector('dl[data-key= "order2"] div.pancakes dd.count').innerHTML = root2.pancake2.dataset.pancakes
document.querySelector('dl[data-key= "order2"] div.status dd').innerHTML = root2.status2.dataset.delivered === "false"? "pending" : "Delivered"

 document.querySelector('dl[data-key= "order3"] div.biscuits dd.count').innerHTML = root3.biscuit3.dataset.biscuits
 document.querySelector('dl[data-key= "order3"] div.donuts dd.count').innerHTML = root3.donut3.dataset.donuts
 document.querySelector('dl[data-key= "order3"] div.pancakes dd.count').innerHTML = root3.pancake3.dataset.pancakes
document.querySelector('dl[data-key= "order3"] div.status dd').innerHTML = root3.status3.dataset.delivered === "false"? "pending" : "Delivered"