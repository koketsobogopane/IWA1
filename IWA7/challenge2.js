const nickname= "";
const firstname = "";
const message1  = `Good Morning, ${nickname || firstname } !`
const message2 = "Good Morning!"
const outputMessage = nickname === "" && firstname === ""? message2 : message1

console.log(outputMessage)