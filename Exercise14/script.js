function isLeapYear () {
    let input1 = prompt("Enter first number between 0 and 100")
    let num1 = Number(input1)
    let input2 = prompt("Enter second number between 0 and 100")
    let num2 = Number(input2)
    let years = []

    //Check if the values are numbers
    if(input1 === `${num1}` && input2 === `${num2}`){
        //Check if the numbers are between 2001 and 2500
        if (num1 >= 2001 && num1 <= 2500 && num2 >= 0 && num2 <= 2500){
            //Order form smallest to largest
            if(num1 > num2){
                let aux = num1
                num1 = num2
                num2 = aux
            }
            //A loop for extract LeapYear and push to array result
            for (let year = num1; year <= num2; year++){
                if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                    years.push(year)
                }
            }
            return alert(`Leap years: ${years}`)
        }else alert("Error, the numbers must be between 2001 and 2500")
    }else alert("Error, Introduce real Numbers between 2001 and 2500")
}

isLeapYear()