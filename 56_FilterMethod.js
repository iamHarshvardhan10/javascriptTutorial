// Filter method


const numbers = [2,3,4,23,4,323,10]

const isEven = function(num){
    return num % 2 === 0;
}

const store = numbers.filter(isEven)
console.log(store)


// javascript filter method

// javascript filter()  method is used to create a new array with all elements that pass certain condition it takes in a callback function as its parameter which is executed on each element of the array the callback function should return true if the element should be included in the new array false

// Array.filter(callback(element[, index[, array]])[, thisArg])


// filter even numbers from an array 

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const filterElem = numbers.filter((num) => num % 2 === 0)

console.log(filterElem)

const emArr = []
numbers.forEach((item) => {
    if(item % 2 === 0){
        emArr.push(item)
    }
})

console.log(emArr)



//2)  Filter words starting with 'A

const words = ['Apple', 'Banana', 'Avocado', 'Grapes', 'Orange'];

const stratingA = words.filter((word) => {
    if(word[0] === 'A') {
        return word
    }
})

console.log(stratingA)


// 3) filter string with length greater than 5 from an array 

const strings = ['Hello', 'World', 'JavaScript', 'Filter', 'Example'];

const greaterThan5 = strings.filter((str) => str.length > 5)

console.log(greaterThan5)