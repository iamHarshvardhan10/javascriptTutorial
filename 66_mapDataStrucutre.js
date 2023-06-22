// Maps

// map is an iterable
// store data in ordered fashion

// store key value pair (like object)

// duplicate keys are not allowed like objects

// different between maps and objects
// objects can only have string or symbol

// in maps you can use anything as key
// like array , number , string


const person = {
    firstName : "harsh",
    age : 7,
    1 : "one"
}

console.log(person.firstName)
console.log(person.age)
console.log(person["firstName"])
console.log(person[1])


for (let key in person){
    console.log(key)
    console.log(typeof key)
}


// using maps

const user = new Map()


user.set('firstName','Harsh')
user.set('age', 3)
user.set(1, 'one')

// adding array as keys

user.set([1,2,3] , 'onetwoThree')

// adding object as key

user.set({firstName:'harsh', age:'20'}, 'hello')


console.log(user)

// to access maps objects

console.log(user.get('firstName'))
console.log(user.get('age'))

// to access all the keys 

console.log(user.keys())

// using for accessing keys

for(let key of user.keys()){
    console.log(key , typeof key)
}



// for of loop on map

for (let [key , value] of user){
    console.log(Array.isArray(key))
    console.log(key , value)
}


// object Maps 


const person1 = {
    id: 1,
    firstName : "harsh"
}

const person2 = {
    id: 2,
    firstName: "shree"
}

const extraInfo = new Map()

extraInfo.set(person1, {age: 12 , gender: "male"});
extraInfo.get(person2 , {age: 15, gender: "Male"})

console.log(person1.id)
console.log(extraInfo.get(person1).gender)
// console.log(extraInfo.get(person2).age)