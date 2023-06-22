const numbers = new Set([1,2,4,6,47,6,1,58,5,47,1,3,54])

numbers.add(49)
numbers.add('items')
numbers.add(['item1', 'item2'])


console.log(numbers)



// unique element from array

const array = [1,2,4,5,1,42,4,2,3,4,7,8,9,5,6,2,3]

console.log(array)

const uniqueElement = new Set(array)

console.log(uniqueElement)


// to find the length of set

let length = 0;

for(let element of uniqueElement){
    length++;
}

console.log(length)