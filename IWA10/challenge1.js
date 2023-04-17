const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`).getTime(),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

holidays[futureId] ? console.log(holidays[futureId].name) : console.log(`ID ${futureId} not created yet`)

// copied = holidays[6]
//let copiedName = "X-mas"
//const copiedId = holidays[6].id
const copied = {
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
}
}

let correctDate =  new Date(`December 25, ${currentYear} 00:00:00`)
copied[6].name = "X-mas"
//let copiedDate = correctDate
let isEarlier = correctDate < holidays[6].date
if (isEarlier) {copiedDate = correctDate}
console.log('New date is earlier:', isEarlier,)
console.log('ID change:', holidays[6].id === copied[6].id ? false : copied[6].id )
console.log('Name change:', holidays[6].name === copied[6].name ? false : copied[6].name )
console.log('Date change:', holidays[6].date === copied[6].date ? false : copied[6].date.toLocaleDateString('en-GB') )

const firstHolidayTimestamp = Math.min(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
)
   

 const firstDay = new Date (firstHolidayTimestamp).getDate ()
 const firstMonth = new Date (firstHolidayTimestamp).getMonth ()+1
 const lastDay = new Date (lastHolidayTimestamp).getDate ()
 const lastMonth = new Date (lastHolidayTimestamp).getMonth ()+1
 console.log(`${"0"+firstDay}/${"0"+firstMonth}/${currentYear}`)
 console.log(`${lastDay}/${lastMonth}/${currentYear}`)
const obj = Object.keys(holidays)
const randomHoliday = Math.floor(Math.random () * obj.length)
const randomHolidaykey = new Date (holidays[randomHoliday].date)
console.log(randomHolidaykey.toLocaleDateString('en-GB'))