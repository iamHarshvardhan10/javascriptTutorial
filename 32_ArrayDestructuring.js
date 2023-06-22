// array destructuring



const myArray = ["myarray1","myArray2"]
console.log(myArray)

let [myarray1, myArray2] = myArray

console.log("value of myArray1 is:-", myarray1)
console.log("value of myArray2 is:-", myArray2)




const ArrayString = ["String1", "String2", "string3","string4"]
console.log(ArrayString)

let [string1 , string2] = ArrayString
console.log("string one is ", string1)
console.log("string 2 is :-", string2)

// to skip the values of ArrayString

let [, , string3 , string4] = ArrayString
console.log("value of stirng3", string3)
console.log(string4)


// to add remaining value in new array

let [str1 ,str2, ...newstring] = ArrayString
console.log(str1)
console.log(str2)
console.log(newstring)

