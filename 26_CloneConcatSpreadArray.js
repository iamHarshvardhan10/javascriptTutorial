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