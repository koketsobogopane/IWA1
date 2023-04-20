// scripts.js
/**
 * 
 *Edit only the code between the two comment lines
 *The code must compare the last value of each provided array
 *The largest value must be removed from it’s array
 *The largest value must be added to the result array
 */

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1]

const second = data.lists[1][1]

const third = data.lists[2][1]


const result = []

const extractBiggest = () => {
	if (first[first.length - 1] > second[second.length - 1] && first[first.length - 1] > third[third.length -1] ) {
         return first.pop() } 

     if (second[second.length -1] > first[first.length -1]&& second[second.length -1] > third[third.length -1]){
        return second.pop()
     }

     if (first[first.length - 1] === undefined ){
       if (second[second.length -1] > third[third.length -1]){return second.pop()}
       if (third[third.length -1] > second[second.length -1]){return third.pop()}  
       if (third[third.length -1] === undefined){return second.pop()}  
    } 

    if (second[second.length -1] === undefined){return third.pop()} 
     
     }
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
