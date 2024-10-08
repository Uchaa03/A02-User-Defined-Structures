// Math.random for generate random values.
// To fixed for round the random
let num1 = Math.random() * 10
// To fixed return string, conver to float with parse float
num1 = parseFloat(num1.toFixed(2))

//For convert string to number
let num2 = parseInt("100")

//Basic function
function addition (num1, num2) {
    //Checking the values are numbers
    if (!isNaN(num1 || num2)) {
        //If you introduce a number string conver to a number for addition
        return Number(num1) + Number(num2)
    }else{
        return "Introduce a Number"
    }
}

console.log(addition(num1,num2))
console.log(addition("5",0))
console.log(addition("5ff",0))
console.log(addition('',0))
console.log(addition('',"fdgdfgfdg"))