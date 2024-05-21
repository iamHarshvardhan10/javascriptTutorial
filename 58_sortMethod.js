// sort method

const numbers = [2,34,5,4,3,53434,5,456,423,56]

const store = numbers.sort((a,b) => {
    return a-b;
})

console.log(store)



const storeOneMore = numbers.sort(function(a,b){
    return a-b;
})

console.log(storeOneMore)


// sort() method is used to sort the element of an array inplace and return the sorted array it sorts the array elements based onthier unicode code points by default 


// 1) sorting in descending order 
const numbered = [1,4,6565,5475,335,545,4]

// const numbers = [5,1,3,2,4]
const stored = numbers.sort((a,b) => {
    return b - a;
})
console.log(store)


//2) sorting in  order

const user = ["apples", "zebra", "shrre", "harsh", "york", "wolf", "fox", "parrot"]

 user.sort()
 console.log(user)


//  sorting objects based on property

 const students = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 18 },
    { name: 'Bob', age: 22 }
  ];

  students.sort((a,b) => a.age - b.age)
  console.log(students)