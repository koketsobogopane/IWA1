// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const status1 = document.querySelector('div#book1 p span.status')
const reserve1 = document.querySelector('div#book1 button.reserve')
const checkout1 = document.querySelector('div#book1 button.checkout')
const checkin1 = document.querySelector('div#book1 button.checkin')

const status2 = document.querySelector('div#book2 p span.status')
const reserve2 = document.querySelector('div#book2 button.reserve')
const checkout2 = document.querySelector('div#book2 button.checkout')
const checkin2 = document.querySelector('div#book2 button.checkin')

const status3 = document.querySelector('div#book3 p span.status')
const reserve3 = document.querySelector('div#book3 button.reserve')
const checkout3 = document.querySelector('div#book3 button.checkout')
const checkin3 = document.querySelector('div#book3 button.checkin')

checkin1.style.color= ''
status1.style.color = STATUS_MAP[status1.innerText].color
STATUS_MAP[status1.innerText].canReserve===false ? reserve1.disabled = 'true' : reserve1.disabled = ''
STATUS_MAP[status1.innerText].canCheckout===false ? checkout1.disabled = 'true' : checkout1.disabled = ''
STATUS_MAP[status1.innerText].canCheckIn===false ? checkin1.disabled = 'true' : checkin1.disabled = ''

checkin2.style.color= ''
status2.style.color = STATUS_MAP[status2.innerText].color
STATUS_MAP[status2.innerText].canReserve===false  ? reserve2.disabled = 'true' : reserve2.disabled = ''
STATUS_MAP[status2.innerText].canCheckout===false ? checkout2.disabled = 'true' : checkout2.disabled = ''
STATUS_MAP[status2.innerText].canCheckIn===false ? checkin2.disabled = 'true' : checkin2.disabled = ''

checkin3.style.color= ''
status3.style.color = STATUS_MAP[status3.innerText].color
STATUS_MAP[status3.innerText].canReserve===false ? reserve3.disabled = 'true' : reserve3.disabled = ''
STATUS_MAP[status3.innerText].canCheckout===false ? checkout3.disabled = 'true' : checkout3.disabled = ''
STATUS_MAP[status3.innerText].canCheckIn===false ? checkin3.disabled = 'true' : checkin3.disabled = ''