// scripts.js
/**a calendar that automatically calculates the current month and day and displays all dates in a grid format. */

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
  const result = []
//this creates a result array that customized by the length argument entered 
  for (let i = 0; i < length; i++) {
      result.push(i)
  }
  return result 
}
/**
 * 
 * This function creates the data for the calender using loops. 
 * The function uses a for loop nested in another for loop to create a two dimensional storage that stores the days by the weeks in a month. 
 * This means it should automatically update to check the month,which day does the month starts in and also end in. 
 * Fixes: I correted the syntax error found, restructured the code to offer more redability 
 * 
 */
const createData = () => {

  const current = new Date()
  current.setDate(1)

  const startDay = current.getDay()
  const daysInMonth = getDaysInMonth(current)

  let weeks = createArray(6)
  let days = createArray(7)
  let value = []

   for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
       
      value[weekIndex] = {
          week: weekIndex + 1,
          days: [] 
          
      }  

       for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
          const day = dayIndex - startDay + 1 + weekIndex * 7;
           const isValid = day > 0 && day <= daysInMonth;

           value[weekIndex].days.push({
                    dayOfWeek: dayIndex + 1,
                    value:  isValid? day: isValid,
          });
      }
   }
   return value
}
/**
 * 
 * This function creates the a cell using template literal syntax 
 */
const addCell = ( classString, value) => {
  const result = /* html */ `
      <td class = '${classString}'>
          ${value}
      </td>

  `
  return result
}
/**
 * 
 * This function creates the calender table using almost the same logic as the "createData" function.
 * It makes use of the "addCell" function to customize each cell accordingly.
 */
const createHtml = (data) => {
  let result = ''

  for (let week of data) {
      let inner = addCell('table__cell table__cell_sidebar', `Week ${week.week}`)
  
      for (let day of week.days ) {
          let classString = 'table__cell'
    const isToday = new Date().getDate() == day.value 
          const isWeekend = day.dayOfWeek = 1 && day.dayOfWeek == 7
          const test = week.week % 2
          const isAlternate = test === 0

         

    if (isToday) classString = `${classString} table__cell_today`
          if (isWeekend) classString = `${classString} table__cell_weekend`
          if (isAlternate) classString = `${classString} table__cell_alternate`
          inner += addCell( classString, day.value || "")
          
      }
       
      result += `<tr class = "table__row">${inner}</tr>`
  }
 return result
}
/**I would want to have the number of weeks change according to the number of weeks of each month. I would like to also find a way to highlight the holidays. */

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)