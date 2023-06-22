// most important methods

// for each method


const numbers = [2,32,323,45,46,7,89,2,4,5]


// function myFunc(number , index){
//     console.log(`index is ${index} and number is ${number}`)

// }

// for(let i =0; i<= numbers.length -1; i++){
//     myFunc(numbers[i],i)
// }


// numbers.forEach(myFunc)


// another way


numbers.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`)
    console.log(number*3,index)
})



// using with objects 

const users = [
    {firstName:"harshit", age:23},
    {firstName:"harsh", age:20},
    {firstName:"shree", age:21}
]


users.forEach(function(user){
    console.log(user.firstName)
})



// using arrow function
users.forEach((user) => {
    console.log(user.firstName)
})



// practice problem in javascript using forEach method


//======>1)  calculate the sum of all numbers in an array

// let array = [1,2,3,4,5,6,7,8,9,10]

// let total = 0

// for(let i = 0; i< array.length  ; i++){
//     total = total + array[i];

// }

// console.log(total)


// using function 

// const calculateSum = (Array) => {
//     let sum = 0;
//     let error = "check the array i think you have other than number in it"

//     for(let i = 0; i< Array.length; i++){
//         if(typeof Array[i] === 'number'){
//             sum = sum + Array[i];
//         }else{

//             return error
//         }
//     }

//     return sum;
// }

// const numbers = [1,2,3,4,5,6,7,8,9,100]
// console.log(calculateSum(numbers))



// using forEach method

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function calculateSum(num){
//     let sum =0;
//     num.forEach((item) => {
//         sum += item;
//     })

//     return sum;
// }

// const number = calculateSum(array)
// console.log(number)



// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;

// array.forEach((item, index) => {
//     sum += item;
//     console.log(`index ${index} and sum is ${sum}`)
// })






// ==> 2) Find the maximum value in an array of numbers

// const array = [45,86,78,99,25,36,78,100,154,699,785,4515]


// const findMax = (array) => {
//     let max = array[0]
//     array.forEach((item) => {
//         if(item > max){
//             max = item;
//         }
//     })
//     return max;

// }

// console.log(findMax(array))


// ===> 3) count the numbers of even numbers in an array

// const arr = [1,54,7,56,23,4,7,5,6,8,32,56,9,8,54,578,564,5,102,23,15,11,20,22,24,13,69,502,998,0,1,3,99]

// const Evenstore = []
// const oddStore = []

// const countEven = (array) => {
//     let count = 0;
//     let OddCount = 0;
//     array.forEach((item) => {
//         if(item % 2 !== 0){
//             count++;
//             Evenstore.push(item)
//         }else{
//             OddCount++;
//             oddStore.push(item)
//         }
//     })

//     return [count , OddCount];

// }

// console.log(countEven(arr))
// console.log(Evenstore)
// console.log(oddStore)


//==> 4) convert an array of strings to uppercase

// const array = ["harsh", "shree", "bhosale"]

// const CtoUppercase = (array) => {
//     let uppercaseValue = []
//     array.forEach((item) => {
//         uppercaseValue.push(item.toUpperCase())
//     })

//     return uppercaseValue;
// }


// const uppercaseValue = CtoUppercase(array)
// console.log(uppercaseValue);


//5) filter out all negative number from an array

// const array = [-2,-1,-10,15,45,23,-99,-25,47,89,6,2]

// const filterNegative = (array) => {
//     let filteredElem = []
//     array.forEach((item) => {
//         if(item < 0){
//             filteredElem.push(item)
//         }
//     })

//     return filteredElem
// }

// const filteredElem = filterNegative(array)
// console.log(filteredElem)


// 6)  find the average value of an array numbers


// const arr = [1,54,7,56,23,4,7,5,6,8,32,56,9,8,54,578,564,5,102,23,15,11,20,22,24,13,69,502,998,-79,1,3,99,]

// const findAvrg = (Array) => {
//     if(Number.length === 0){
//         return 0;
//     }

//     let sum = 0;
//     Array.forEach((item) => {
//         sum = sum + item
//     })

//    let average = sum / Array.length;
//    return ['Avarage :-', average ,"sum :- ", sum , "Total Number of elem: - ", Array.length]
// }


// console.log(findAvrg(arr))



// 7) Merge multiple arrays into a single array.

// const array1 = [1,2,3,4,5,6,2]
// const array2 = ["Harsh", "bhosale","shree","rohit","Gill","Surya"]

// const array3 = [
//     {school:"NL", course:"CS", Year:"2023"},
//     {school:"KES", course:"IT", Year:"2024"},
//     {school:"PATKAr", course:"Biology", Year:"2025"}
// ]

// const mergedArray1 = array1.concat(array2,array3)
// console.log(mergedArray1)



// method 2

// const mergedArray2 = []

// array1.forEach((item) => {
//     mergedArray2.push(item)
// })
// array2.forEach((item) => {
//     mergedArray2.push(item)
// })
// array3.forEach((item) => {
//     mergedArray2.push(item)
// })

// console.log(mergedArray2)


// method 3

// const mergedArray3 = [...array1,...array2,...array3]
// console.log(mergedArray3)


// method 4

// const mergedArray4 = [...new Set(array1.concat(array2,array3))]

// console.log("Removed all duplicate element:-",mergedArray4)

// method 5

// const mergedArray5 = array1.slice(0).concat(array2.slice(3), array3.slice(2))

// console.log("Conditon dala hai yaha pe kaha se kaha tk chahiye :- ",mergedArray5)


//8) count the occurrence of each element in an array

// const array = [1,2,5,6,2,4,7,8,10,5,6,5,3,5]

// const occurrenceOfElem = (array) => {
//     const map = new Map()

//     array.forEach((elements) => {
//         if(map[elements]){
//             map[elements] = map[elements] + 1
//         }else{
//             map[elements] = 1
//         }
//     })

//   return map;
    
// }

// const occurrence = occurrenceOfElem(array)
// console.log(occurrence)


// 9) Remove duplicates from an array.

// const array = [1,2,5,6,2,4,7,8,10,5,6,5,3,5]

// const uniqueElem = (array) => {
//     const set = new Set()

//     array.forEach((item) => {
//      set.add(item)
       

//     })

//     return [...set];
// }

// console.log(uniqueElem(array))


// examples and problem on for Each method

// 1) basic usage with an array 

// const array = [1,2,3]

// array.forEach((item) => {
//     console.log(item)
// })


// 2) using an arrow function with index

// const array = [1,2,5,6,4,6,2,4,6,21545]

// array.forEach((item,index) => {
//     console.log(`Index of array is:- ${index} : ${item}`)
// })



// 3) Iterating over an object's properties

// more about Object.value()
// The Object.value() static method returns an array of given object's own enumerable string keyed property values.


// const obj1 = {
//     name : "harsh",
//     age : 20,
//     city : "Delhi"
// }
// console.log(Object.values(obj1.name))
// console.log(Object.values(obj1))


// console.log(Object.values("Harsh"))


// ===> 3) Iterating over an object's properties

// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f:6,
//     g:7,
//     h:8,

// }
// console.log(obj)
// const IntoArray = Object.values(obj)
// console.log(IntoArray)  
// IntoArray.forEach((item , index) => {
//     console.log(`Index is ${index} and ${item}`)

// })




// 4) using thisArg parameter

// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
// }

// function logValue(value){
//     console.log(value + this.number);
// }

// Object.values(obj).forEach(logValue , {number : 'a'})


//5)  skipping undefined or empty array elements

// const array = [1,1,1, , 45, , 489, ,6347, ,74]
// console.log(array)

// array.forEach((item) => {
//     if(item !== undefined){
//         console.log(item)
//     }
// })



// Early exit from the loop using label:-

// const array = [1,2,3,4,5,6,7,8,9,10,1,1,2,];

// for (let k=0; k<array.length; k++){
//     const item = array[k]

//     if(item === 3){
//         console.log("Breaking out of the loop")
//         break;
//     }
//     console.log(item)
// }


// array.forEach((item, index) => {
//     if(item === 3){
       
//         console.log("Breaking out for loop")
       
//     }
//     console.log(item)
// })




// 7) Modifying the original array

// const array = [1,2,3,4,5,6,7,8,9,10,1,1,2,];

// array.forEach((item, index ,arr) => {
//     arr[index] = item * 2;
// });

// console.log(array)



// 8) for each using Map 

// In javascript Map is built in data structure that allows you to store key value pairs It is similar to an object but it provides additional fuctionality and has some differences in behabior 

// const map = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//     ['e', 4],
//     ['f', 5],
//     ['g', 6],
//     ['h', 7]
// ]);

// map.forEach((value , key) => {
//     console.log(key , value)
// })


// 9) filtering out specific values

// const array = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,13,45,78,4,5,88,65,66,42,44,42,22,24,46,50]

// const filterElem = []

// array.forEach((item) => {
//     if(item % 2 === 0){
//         filterElem.push(item)
//     }
// })

// console.log(filterElem)


// 10) using for each with set

// const set = new Set([1,2,3,4,5,6,7,8,9])

// set.forEach((item) =>{
//     console.log(item)
// })

// 11) Iterating over string

// const str = "Harshvardhan Bhosale"
// const arr = [...str]

// arr.forEach((item) => {
//     console.log(item)
// })


// methods to convert string to array 

// 1) Array.from() 

// const str = "harsh"
// Array.from(str).forEach((item) => {
//     console.log(item)
// })




// 2) Using spread Operator 

// const str = "harshvardhan"
// const arr = [...str]
// console.log(arr)
// arr.forEach((item) => {
//     console.log(item)
// })




// 3) using split('')


// const str = "harshvardhanbhosale"
// const arr = str.split('')
// console.log(arr)
// arr.forEach((item) => {
//     console.log(item)
// })



// 4) using Array.prototype.slice.call()


// const str = "helloeveryone here i am "
// const arr = Array.prototype.slice.call(str)
// console.log(arr)
// arr.forEach((itme) => {
//     console.log(itme)
// })





// 5) using for of loop to push into empty array 


// const str = "harshvarefiohjfe"
// const store = []

// for (const char of str){
//     store.push(char)
// }
// console.log(store)
// store.forEach((item) => {
//     console.log(item)
// })


// 6) using Array.prototype.map()


// const str = "harshvarefiohjfe"
// const store = Array.prototype.map.call(str , (char) => char)
// console.log(store)
// store.forEach((item) => {
//     console.log(item)
// })



// 13) skipping iteration for specific conditions

// const array = [1,2,3,4,5,6,7,8,9,10]

// array.forEach((item) => {
//     if(item === 4){
//         return;
//     }
//     console.log(item)
// })


// 14) Modifying properties of objects in an array

// const array = [
//     {name : "harsh" , age : 20},
//     {name : "shree" , age : 25},
//     {name : "vinayak" , age : 298}
// ]

// array.forEach((item) => {
//     item.age = item.age +1;
//     item.name[0] = "harsh"

//     console.log(`Name: ${item.name} and age : ${item.age}`)
// })

// console.log(array)


// 15) iteraring over reverse order

// const array = [1,2,3,4,5,6,4,58,7,8,9,5,6,4,6,8,,1,2,3]

// const storeArray = []

// for(let i= array.length - 1; i>= 0; i--){
//     storeArray.push(array[i])

// }

// console.log(storeArray)
// storeArray.forEach((itme) => {
//     console.log(itme)
// })