const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line
const number = /^[0-9]+$/

const primaryValid = number.test (primaryPhone)
const secondaryValid = number.test (secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

// const primaryValid = !Number.isNaN(parseInt(primaryPhone))
// const secondaryValid = !Number.isNaN(parseInt(secondaryPhone))