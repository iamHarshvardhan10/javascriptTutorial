// how to iterate objects

const person = {
    name : "Harsh",
    age : 21,
    gender: "male",
    hobbies:["Cricket","Chess","coding"]


}

console.log(person)

for (let key in person){
    console.log(key , person[key])
}

// using objects.keys
const store = Object.keys(person)
console.log(store)

console.log(typeof store)

console.log(Array.isArray(store))

// using for of loop iterate objects

for (let key of Object.keys(person)){
    console.log(key ," : " ,person[key])
}