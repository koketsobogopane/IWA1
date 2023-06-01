#IWA-9 
## AUTHOR: Koketso Bogopane

```JavaScript 
// the code below calculates the total remaining balance after deducting expenses from the salary taking into account different tax rates
const taxAsDecimal = parseInt(tax[913]) / 100
const startingAfterTax = salary * (1 - taxAsDecimal)
const type = `${size}-${lodging}`
const balance = rent[type] + expenses.transport + expenses.food
const total  = startingAfterTax - balance
console.log(total.toFixed(2))
