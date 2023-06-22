// splice method

// start , delete , delete 


const myArray = ['item1', 'item2', 'item3']

console.log(myArray)

const deletedItem = myArray.splice(0,1)
console.log(deletedItem)


// insert item 

const insert = myArray.splice(0,0,'item1 inserted')
console.log(myArray)



// splice() method in javascript used to change the contents of an array by removing replacing adding new elements it modifies array in place and returns an array containing the removed element

// Array.splice(startIndex , deleteCount , item1 , item2, ...)


const numbers = [1, 2, 3, 4, 5];

// Remove two elements starting from index 2
const removedElements = numbers.splice(2, 2);

console.log(numbers);  // Output: [1, 2, 5]
console.log(removedElements);  // Output: [3, 4]



const fruits = ['apple', 'banana', 'cherry', 'date'];

// Replace two elements starting from index 1
const replacedElements = fruits.splice(1, 2, 'orange', 'grape');

console.log(fruits);  // Output: ['apple', 'orange', 'grape', 'date']
console.log(replacedElements);  // Output: ['banana', 'cherry']



const colors = ['red', 'green', 'blue'];

// Add two elements starting from index 1
const addedElements = colors.splice(1, 0, 'yellow', 'orange');

console.log(colors);  // Output: ['red', 'yellow', 'orange', 'green', 'blue']
console.log(addedElements);  // Output: []


