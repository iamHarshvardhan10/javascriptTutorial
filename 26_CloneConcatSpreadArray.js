// clone concat and spread in array

// cloning in array

let array1 = ["array2" , "array3", 34, 45]

console.log(array1)

let array2 = array1.slice(0)
console.log(array2)

array1.push("pushedArray")

console.log(array1)



// clone with slice method
array2 = array1.slice(0)
console.log(array2)

// another way with concat method
array2 = [].concat(array1)
console.log(array2)


// spread operator in array

array2 = [...array1]
console.log(array2)



// adding element in cloning array

array2 = array1.slice(0).concat(["array3","array4"])
console.log(array2)

// another way

array2 = [].concat(array1, ["harsh","bhosale"])
console.log(array2)


// another way

array2 = [...array1 , "harshvardhan", "bhosale"]
console.log(array2)



// cloning of array

const myArray = ['array1','array2']
myArray.push('array3')
console.log(`myArray is ${myArray}`,myArray)
console.log(myArray)

// using slice operator

const myArray1 = myArray.slice(0)
console.log(`myArray1 is ${myArray1}`,myArray1)


// using concat operator

const emptyArray = []

const cloneArray = emptyArray.concat(myArray,myArray1)
console.log('clone array is',cloneArray)

// spread operator 

const spreadArray = [...myArray,...array1,...array2,...cloneArray,...emptyArray]
console.log(spreadArray)




