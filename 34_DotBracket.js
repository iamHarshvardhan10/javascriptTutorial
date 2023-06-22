// in objects key are in string data type

const person = {name:"harsh", age:21}

console.log(person["name"])

console.log(person["age"])

// to add array using bracket notation

person.hobbies = ["array1", "array2"]
console.log(person["hobbies"])

person["gender"] = "male"
console.log(person)
console.log(person["gender"])



// 

const key = "email"

person[key] = "harsh@45.com"

console.log(person)