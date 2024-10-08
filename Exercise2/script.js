// A recurssive function is called itself in a loop
let input = prompt("Enter a number");
let num = Number(input);

function recurssiveFunction(num){
    if (num === 0){
        //If you introduced 0 you don't receive anything
        return "";
    }else{
        //Generate a loop
        return "bauuuba" + recurssiveFunction(num -1);
    }
}

//Check value is number
if (input === `${num}`){
    alert(recurssiveFunction(num));
}else alert("ERROR, Instroduce a Number");

