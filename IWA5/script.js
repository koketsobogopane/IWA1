FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0
const customers = 2
const clocation = "NAM"
let currency = null
let shipping ;

if (clocation === "RSA" || clocation === "NAM") { 
    if ( clocation=== "RSA" ) {
     shipping = 400 
     currency = "R"
}
    if (clocation === "NAM"){
     shipping = 600
     currency = "$"

    }
 }
 else{
     shipping = 800
 }

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED 

let total = shoes + toys + shirts + batteries + pens +shirts  



if ( total > 1000 && (clocation === "RSA" || clocation === "NAM") ) {
		shipping = 0
        if (shipping === 0 && customers !== 1) {
            console.log(FREE_WARNING)

            if (clocation === 'RSA') {
                shipping = 400
            }
            else if (clocation === "NAM"){
                shipping = 600
            }
            else {
                shipping = 800
            }
            
        
	}
    else {
        console.log ("Shipping is free!!")
    }
}
if (location === 'RSA') { 
    currency = 'R'
    shipping = 400
} else {
    currency = '$'
    shipping = location === 'NAM' ? 600 : 800
}
// const total = shoes + batteries + pens + shirts + toys 
// const isFreeLocal = currency === 'R' && total > 1000 
// const isFreeInt = currency === '$' && total > 60 
// const isFree = isFreeLocal || isFreeInt 
// const isFreeWarning = isFree && customers !== 1 
// const totalWithShipping = total + shipping 
// const isBanned = location === 'NK' 

// if (isFreeWarning) {console.log(FREE_WARNING)} 
// if (isFree && !isFreeWarning ) {shipping = 0} 

// const withShipping = total + shipping

// console.log(isBanned ? BANNED_WARNING : 'Price: ' + currency + totalWithShipping)

 clocation === 'NK' ? console.log(BANNED_WARNING) : console.log('price',currency, total + shipping)



