// every method


const numbers = [2,,6,8,10]


const storeNumber = numbers.every((number) => {
    return number % 2 === 0;
})

console.log(storeNumber)



// using object


const userCart = [
    {userId:1, price:12000},
    {userId:2, price:18000},
    {userId:3, price:15000},
    {userId:4, price:11000},
]


const usertotal = userCart.every((userPrice) => {
    return userPrice.price > 10000
})

console.log(usertotal)



// every method in javascipt is higher order function that tests whether all element in an array pass a given condition it returns boolean value indicating whether every element in the arary satisfies the condition or not

// check if all numbers in an array are even

const numbered = [1,23,4,6,4,76,7,8]
const allEven = numbers.every((number) => number % 2 === 0)
console.log(allEven)



// check the element of array are string

const fruits = ['apple', 'banana', 'orange', 'mango'];


const allString = fruits.every((str) => {
    typeof str === 'string'

})

console.log(allString)


