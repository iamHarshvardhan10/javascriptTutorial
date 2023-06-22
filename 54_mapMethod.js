// map method

const numbers = [3,4,34,5,3,43,3,43,43]

const square = function(number){
    return number * number
}

const squareNumber = numbers.map(square);
console.log(squareNumber)



const anotherSquare = numbers.map(function(number){
    return number * number
});

console.log(anotherSquare)


const users = [
    {firstName:"harsh", age:20},
    {firstName:"shree", age:20},
    {firstName:"vinayak", age:20},
    {firstName:"rohit", age:20},
]


const store = users.map(function(user){
    return user.firstName;
})

console.log(store)


// Map method in javascipt 

// map() method is used to create a new array by iterating over an existing array and applying a callback function to each element It allows you to tranform each element of the array according to your requirements  and returns a new array with the updated values

// the syntax map() method 
//  array.map(callback(element , index , array), thisArg)



// 1) Doubling Numbers 

const Numbers = [2,45,62,18,12,4,5]

const doubled = Numbers.map((num) => num * 2)
console.log(doubled)


// 2) Converting string to uppercase 

const fruits = ["apple", "mango", "pineapple", 'grapes',"banana"]


const uppercase = fruits.map((str) => str.toUpperCase());

console.log(uppercase)



// 3) Extracting property values 

const user = [
    {name : "harsh", id: 1, age : 20},
    {name : "shree", id: 2, age : 25},
    {name : "rohit", id: 3, age : 28},
]

const Extracting = users.map((user) => user.id)
console.log(Extracting)



// 4) calculating sqaures

const int = [1,45,7,6,1,3,5,4,6,54]
const sqaures = int.map((sqr) => sqr ** 2)
console.log(sqaures)


// 5) Mapping Object Properties 

const books = [
    {title : 'Book1' , author : 'Harsh'},
    {title : 'Book4' , author : 'shree'},
    {title : 'Book2' , author : 'rohit'}
]

const mapping = books.map((book) => book.title)
console.log(mapping)


// 6) Parsing Integers

const string = ['1','2','5','6','8']
console.log(typeof string[0] , string)
const parse = string.map((str) => parseInt(str))
console.log(parse)
console.log(typeof parse[0])


// another way 
const parse1 = string.map((str1) => +str1)
console.log(typeof parse1[0], parse)




// 7) Mapping with index

const arr = ['a','b','c']
const map =arr.map((item , index) => {
    return item + ' ' + index
})

console.log(map)



// 8) mapping nested array

const matrix = [[1,2],[4,5],[7,8]]
const map2 = matrix.map((item , index) => item.map((num) => num * 3) )
console.log(map2)


 