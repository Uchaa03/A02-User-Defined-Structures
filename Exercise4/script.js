let matrix = [[1,2,3],[3,4,5]]
let flattenMatrix = []
let average = 0

//Bubble method
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        //Flatten matrix in a new array
        flattenMatrix.push(matrix[i][j])
    }
}
console.log(flattenMatrix)

//Flatten Matrix Average
for (let i = 0; i < flattenMatrix.length; i++) {
    average += flattenMatrix[i]
}
console.log(`The average of flatten matrix is; ${average/flattenMatrix.length}`)
