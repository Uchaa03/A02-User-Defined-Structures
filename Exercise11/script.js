let dice1
let dice2
let result
let results = {}

for (let i = 0; i <= 36000; i++) {
    //Generate two randoms between 1 and 6
    dice1 = Math.floor(Math.random() * 6) + 1
    dice2 = Math.floor(Math.random() * 6) + 1
    result = dice1 + dice2
    //For generate a counter for the results of dices similar to reduce but use a for
    results[result] = (results[result] || 0) + 1
}

console.log(results)