// reduce method

// two callback parameters :-
// Accumulator and currentValue


const numbers = [2,34,3,2,34,4]


const sumOfAll = function(Accumulator , currentValue){
    return Accumulator + currentValue
}

const store = numbers.reduce(sumOfAll)
console.log(store)

const userCart = [
    {priceId:1,price:12000},
    {priceId:2,price:18000},
    {priceId:3,price:14000},
    {priceId:4,price:1200},
]

const stores = userCart.reduce((totalPrice , ProductPrice) => {
    return totalPrice + ProductPrice.price
}, 0)

console.log(stores)



// reduce method 

// reduce() is powerful higher order function allows you to reduce an array to a single value it applies a callback function to each element of the array accumulating the result into single value

// Array.reduce(callback , initialValue)


// 1) summing an array of numbers

const num = [1,2,3,4,5,6,7,8,9,10]

const sum = numbers.reduce((accumulator , curretValue ) => {
    return accumulator + curretValue
})

console.log(sum)


// 2) Flatterning an array

const nestedArray = [[1,2],[3,4],[5,6]]
const flttendedArray = nestedArray.reduce((accumulator, curretValue) => {
    return accumulator.concat(curretValue)
}, [])

console.log(flttendedArray)


//3) counting occurrence of element

const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];

const count = names.reduce((accumulator, curretValue) => {
    accumulator[curretValue] = (accumulator[curretValue] || 0) + 1;
    return accumulator;
},{})

console.log(count)


// 4) finding maximum value in array

const number = [1,2,64,6,69,7854,9895654,366]

const max = number.reduce((accumulator , curretValue) => {
    return Math.max(accumulator , curretValue)
})

console.log(max)


// 5) Grouping objects by a property

const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' }
  ];

  const Grouping = students.reduce((accumulator , curretValue) => {
    const grade = curretValue.grade;
    if (!accumulator[grade]) {
        accumulator[grade] = [];
      }
      accumulator[grade].push(curretValue.name)
      return accumulator;
  }, {});


  console.log(Grouping)


//   6) calculating the average of an array

const numbered = [4,6,4,8,2,5]

const average = numbered.reduce((accumulator , curretValue , index , array) => {
    accumulator = accumulator + curretValue;
    if(index === array.length -1){
        return accumulator / array.length;
    }
    return accumulator;
},0)
console.log(average)
