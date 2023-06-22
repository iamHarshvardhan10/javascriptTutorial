// fill method


// value , start , end


const myArray = new Array(10).fill(0)
console.log(myArray)


const myArray1 = [1,2,4,5,8,6,2,5,6]
myArray1.fill(0,3,5)
console.log(myArray1)


// fill method in javascipt is used to fill the elements in an array with a specified value it modifies the array in place and returns the modified array the fill() method takes one to three aruguments


// 1) value with fill the array with 
// 2) start index 
// 3) end index


// Array.fill(value , start , end)

// filling an array with single value


const number = [1,2,4,6,3,45,454,2,6,8,6,6,4]

number.fill(0)
console.log(number)

number.fill([1],1,6)
console.log(number)


number.fill({}, -5)
console.log(number)

number.fill("", 6,8)
console.log(number)