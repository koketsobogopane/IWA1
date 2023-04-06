const leoName = 'Leo'
const leoSurname = 'Musvaire      '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = `${ parseFloat((-1 * leoBalance) + (-1 * sarahBalance)).toFixed(2)}`
const totalOwed = owed
const leo = `${leoName} ${leoSurname.trim()} (Owed:R ${parseFloat(-1 * leoBalance).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed:R ${parseFloat(-1 * sarahBalance).toFixed(2)})`
const total = "Total amount owed: "
const result = `${leo}\n${sarah}\n\n${divider}\n\t${total}${totalOwed}\n${divider}`

console.log(result)