// while loop

// let i = 0;


// while(i <= 9){
//     console.log(i)
//     i++;
// }


// console.log(i)
// console.log("outside the while loop")


// exmaples of first natural number

//1) declare i outside the while like this 
// let i = 0;

//  2) In while loop assign the condition what we want 


// let total = 0;
// let i = 0;

// while(i <= 100){
//     total = total + i;
//     i++
// }

// console.log(total)

console.time('while')
let i = 0
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
console.timeEnd('while')

console.time('loop')
let a = 0
while (a <= 9) {
    console.log(a)
    a++
}
console.timeEnd('loop')



// 

// let b = 0
// while (b >= 0) {
//     if (b % 2 !== 0) {

//         console.log(b)
//     }
//     b++
// }


// all natural number sum

let number = 0
let total = 0

while(number <= 10){
    total = total + number
    number++
    console.log(total)
}