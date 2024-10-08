let matrix = [1,2,3,4,5,6,7,8,9]


function filterAndTransform(matrix){
    const result = matrix.filter(num => num % 2 !== 0)
    return result.map(num => num*2)
}

alert(filterAndTransform(matrix))