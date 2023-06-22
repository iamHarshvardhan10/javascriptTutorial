//Console is an object in javscript that used as debugging tool and logging results
// Its is a web tool for developers to debug their code It is used to display information about code such as the values of variables the results of expression and the results of function calls

//On condition it can also used to display errors and warning

// Console is a global objects so its is available in every scope You can use it as console


// Types of console 

// 1

console.log("harsh")

// 2 assert
// a condition and if the condition is false then outputs a message in the console. If the assertion is true then nothing happens
var num = 10;
console.assert(num > 20, "Number is less than 20")


//3 
// console.count
// The console.count() method logs the number of times the count() method has been called.

for (let i=0 ; i<5; i++){
    console.count("Count Number")
    console.log(i);
}

//4
// The console.dir() method displays an interactive list of all the properties of a specified object.

const arr = [1,2,3,4];
console.dir(arr);
console.dir(document.location)


//5
// The console.error() method logs erro message to the console.

console.error("errro")


//6
// console.info() is used to display an informational message.

console.info("This is information message")

//7
// console.group() is used to group the output of a block of code.

console.group("Group 1");
console.log("Hello");
console.log("World");
console.groupEnd();

console.group("Group 2");
console.log("HTML");
console.log("CSS");
console.log("JavaScript");
console.groupEnd();


//8
// The console.warn() method outputs a warning message to the console.

let n = 99999;

if (n > 10000) {
  console.warn("Number is too large");
}