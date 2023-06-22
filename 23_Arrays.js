// arrays

// Arrays are refernce type 
// typeof array is object
// to find the its array or not we can use Array.isArray

// array is order collection of items

let array = ["fruits",14, null , undefined , false ]
console.log(array)

// to change the value in any index number

array[1] = 15;
console.log(array)

// array can store any data type


// to find index number and value 
console.log(array[0])


// to find the type of array
console.log(typeof array)


// to find whether its array or not
console.log(Array.isArray(array))




// Extra explanation of array

// Array In Javascript
// An Array is a data strucutre that allows you to store multiple values in single variable. It is type of object in javascript and can hold values of different data types including numbers , strings , objects , even other arrays


const fruits = ["Apple", "Banana", "Orange"]
console.log(fruits)

// PUSH POP SHIFT UNSHIFT

// Push Adds one or more elements to end of an array
fruits.push("Grapes","CustredApple","Watermelon")
console.log(fruits)



// pop : removes the last element from an array and returns it 

fruits.pop()
console.log(fruits)

// shift :- removes the first element from an array and returns it shifting all other elements down by one

fruits.shift()
console.log(fruits)

// unshift :- Adds one or more elements to the beginning of an array shifting existing elements up by one

fruits.unshift("Mango")
console.log(fruits)



// Primitive vs reference data type 

// In Javascript primitive data type are stored by value while reference data types are stored by reference when assigining a primitive value to a variable a copy of the value is made however when assigining a reference value to variable only reference to the value stored

let num1 = 5;
let num2 = num1;
console.log(num1)
console.log(num2)
num1 = num1 + 3
console.log(num1)
console.log(num2)





let arr1 = [1,2,3]
let arr2 = arr1
console.log(arr1)
console.log(arr2)

arr1.push(4)
console.log(arr2)



// Clone Array & Spread Operator:
// To create a copy of an array without modifying the original array, you can use the spread operator (...) or Array.from().


const originalArray = [1, 2, 3];
const cloneArray = [...originalArray];  // Using spread operator

originalArray.push(4);
console.log(cloneArray);  // [1, 2, 3] - cloneArray is not affected



// For Loop:
// A for loop is used to iterate over an array (or any iterable) for a specified number of times or until a certain condition is met.

const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}



// Use const for creating arrays:
// When creating an array using const, you can still modify the contents of the array, but you cannot reassign the variable to a new array.


// const fruits1 = ['apple', 'banana', 'orange'];
// fruits1.push('grape');      // Valid - Modifying the array
// fruits1 = ['kiwi', 'pear']; // Invalid - Reassigning to a new array

// console.log(fruits1)

// while loop 
// A while loop can be used to iterate over an array based on a conditons such as until a certain element is found 

const number = [1,2,3,4,6]
console.log(number)
let i = 0
while(i<number.length){
    console.log(number[i])
    i++;
}


