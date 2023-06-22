// Primitive vs reference types


// Primitive Types

let num1 = 6;
let num2 = num1;
console.log("Num1 is :-", num1)
console.log("Num2 is :-",num2)

console.log("After incresing the number")
num1 = num1 + 1;

console.log("num1 is :-", num1)
console.log("Num2 is :-", num2)


// reference  Type

let array1 = ["array"]
let array2 = array1
console.log("Array1 is:-",array1)
console.log("Array2 is:-",array2)

console.log("after incresing the array")

array1.push("pushed")


console.log("array is:-", array1)
console.log("array2 is:-", array2)


// its happening like this beacause
// in primitive type item store in stack so different variable values have the different value 

// in reference type item store in hash 