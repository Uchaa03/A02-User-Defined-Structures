
//Regex for valide de input mesagge
const regex = /^[a-zA-Z ]+$/

//Use IndexOF and Array for create rot13 cipher with replace
const rot13= (mesagge) => {
    const cypher = "abcdefghijklmnopqrstuvwxyzabcdefghijklm" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM"
    // Replace de letter for de letter[position with index of + 13] excluding white spaces with regex in replace
    return mesagge.replace(/[a-zA-Z]/g, letter => cypher[cypher.indexOf(letter) + 13]);
}

const mesagge = prompt("Enter a word or phrase to cypher with ROT13")
regex.test(mesagge)?alert(rot13(mesagge)):alert("PLS,Introduce a phrase or word")