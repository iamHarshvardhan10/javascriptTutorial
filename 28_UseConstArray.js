// use const for making array 

const fruits = ["apple","banana","stawberry","pineapple"]

console.log(fruits)


for (let i = 0; i<= fruits.length-1; i++){
    console.log(fruits[i], "index of fruits :-" , i)

}

// pushing the element into fruits
fruits.push("harsh")
for (let k=0; k<= fruits.length-1; k++){

    console.log(fruits[k], k)
}