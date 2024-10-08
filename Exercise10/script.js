let input = prompt("Enter a number 1 to 12");
let num = Number(input)
let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre",
    "November","December","Noviembre","Diciembre"]

//For check the value is correct
if (input === `${num}` && num >= 1 && num <= 12) {
    let month = months[num -1]
    switch (month){
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert(`Month: ${month} have 31 days`);
            break
        case "Febrero":
            alert(`Month: ${month} have 28 days`);
            break
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert(`Month: ${month} have 30 days`);
            break
    }
}else alert("ERROr, Introduce a correct number between 1 and 12")