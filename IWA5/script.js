FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0
const customers = 1
const clocation = "NK"
let currency = null
let shipping = null

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

let shoes = 300 * 3
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED 

let total = shoes + toys + shirts + batteries + pens +shirts  


if ( total > 1000 && (clocation === "RSA" || clocation === "NAM") ) {
		shipping = 0
        console.log ("Shipping is free!!")
	}

if (shipping === 0 && customers !== 1) {
     console.log(FREE_WARNING)
     }

 clocation === 'NK' ? console.log(BANNED_WARNING) : console.log('price',currency, shoes + toys + batteries + pens +shirts)
// customers = '1'
// const location = 'RSA'
// currency = null

// shipping = null
// currency = $

// if ( total > 1000 && (clocation === "RSA" || clocation === "NAM") ) {
// 	if (location = "NAM" && customers < 2) {
// 			if (location === "RSA")
// 		    shipping = 0 || calcShipping
//             console.log ("FREE SHIPPING")
//             console.log ("yes")
// 		}
// 	}


