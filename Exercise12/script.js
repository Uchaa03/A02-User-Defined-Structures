function findpairs () {
    let input1 = prompt("Enter first number between 0 and 100")
    let num1 = Number(input1)
    let input2 = prompt("Enter second number between 0 and 100")
    let num2 = Number(input2)
    let result = []

    //Check if the values are numbers
    if(input1 === `${num1}` && input2 === `${num2}`){
        //Check if the numbers are between 0 and 100
        if (num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100){
            //Order form smallest to largest
            if(num1 > num2){
                let aux = num1
                num1 = num2
                num2 = aux
            }
            //A loop for extract evens and push to array result
            for (let i = num1; i <= num2; i++){
                if (i % 2 === 0) {
                    result.push(i)
                }
            }
            return alert(result)
        }else alert("Error, the numbers must be between 0 and 100")
    }else alert("Error, Introduce real Numbers between 0 and 100")
}

findpairs()

