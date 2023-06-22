// some method


const numbers = [3,5,7,9,19]


// agr ek bhi number 2 se divide hoke remainder 0 mila toh true return karega


const storeNumber = numbers.some((number) => {
    return number % 2 === 0;
})

console.log(storeNumber)


// some method is used to test whether at least one element in an array passes a specified conditon it iterates through the array and returns true if the callback function returns a truthy value for any element return false



const numbered = [1,3,2,4,5,4,78]

const greaterThanThree = numbers.some((number) => number > 3)

console.log(greaterThanThree)

const negativeNumber = numbers.some((number) => number < 0)

console.log(negativeNumber)

const words = ['apple', 'banana', 'kiwi', 'grapefruit'];

const lengthOfString = words.some((str) => str.length > 5)
console.log(lengthOfString)