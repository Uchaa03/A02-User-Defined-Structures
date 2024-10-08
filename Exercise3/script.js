let numbers = [20,40,5,-1,10]

//Filter return array value if the conditions it's ok
console.log(numbers.filter(num => num === 10))

//Delete the last number
console.log(numbers.pop)

//Array Collection with map
let newNumbers = numbers.map(num => num * 2)
//Array collected multiplied * 2
console.log(newNumbers)