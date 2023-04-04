
const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ( hourOfDay === 00 && minuteOfDay === 00 && hourOfDay !== undefined && minuteOfDay !== undefined) {
 const taxAsDecimal = parseInt (tax) / 100
 const taxTotal = salary * taxAsDecimal
  const salaryAfterTax = salary - taxTotal  
	const balance = salaryAfterTax - transport - food - rent 
    console.log ("R",balance.toFixed(2)) 
}
