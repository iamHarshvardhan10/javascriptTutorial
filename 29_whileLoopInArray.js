// while loop in array

const fruits = ["apple ", "orange","mongo","banana","grapes"]
const fruits2 = []

console.log(fruits)

let i = 0;
while(i<fruits.length){
    console.log(fruits[i])
    fruits2.push(fruits[i])
    i++
}

console.log("its fruits2 bucket",fruits2)