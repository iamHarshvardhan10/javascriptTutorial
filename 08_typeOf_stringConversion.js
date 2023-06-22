// Different Types Of datatype

// Primitive data Type
// string
// number
// boolean
// undefined
// null
// BigInt
// Symbol

const age = 20;
console.log(typeof age);

const firstName = "harsfhs"
console.log(typeof firstName)

// Convertion of Number to string

const age1 = 20;
console.log(age1)
console.log("I am a Number",typeof age)
const ageToString = age1 + ""
console.log(ageToString)
console.log("ahhh You make Me String",typeof ageToString)


// convertion of string to number

const string1 = "harshf";
console.log("Yee I am string:-  ", string1)
const string2 = +string1
console.log("I become Number Now:- ", typeof string2)


// new way of convertion

const newString = "harhs";
console.log("wooww You Made me a Number:- ",typeof Number(newString))
console.log("wooww You Made me a string:- ",typeof newString)

// adding number and string in front of varaible value changes variable type respectively
