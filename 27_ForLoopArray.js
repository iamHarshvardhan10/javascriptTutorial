// for in loop in array

// array with length properties

let fruits = ['apple','mongo','orange','banana','watermelon']

console.log(fruits);


// to access the length of array

console.log(fruits.length);


// to access the last index of array

console.log(fruits.length-1);



let fruits2 = []
for (let i=0; i<= fruits.length; i++){
    console.log(i);
    console.log(fruits[i])
    console.log(fruits[i].toUpperCase());
    
    fruits2.push(fruits[i])

}

console.log(fruits2)
