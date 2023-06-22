// object refernce type
// array are good but not sufficient for real world data

// objects store key value pairs

// objects don't have index
// objects also callled as objects literals



// how to create objects

const person = {name:"harsh", age:21}
console.log(person)
console.log(person.name)

console.log(person.age)

// how to add new key pair in objects


person.gender = "male";
console.log(person)


// to add array in objects

person.hobbies = ["array1","array2"]
console.log(person)

// to access the each objects value

console.log(person.name)
console.log(person.age)
console.log(person.gender)
console.log(person.hobbies)
console.log(person.hobbies[0])




// combined part of objects deep explanation



// objects in javascript


// Intro to Objects

// In javascript an object is a collection of key-value pairs. It allows you to store and access data using the keys objects are defined using curly braces {} and keyvalue pairs are separated by commas


const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking", "Reading"]
}

console.log(person)


// Dots and Bracket notation 

// there are two aways to access properties of an object dot notation and bracekt notation Dot notation uses the dot (.) followed by the property name , while bracket notation uses sqaure ([]) with the propery name as a string

console.log(person.name)
console.log(person['age'])


// Iterate object 

for (let key in person) {
    console.log(key + ':' + person[key])
}


// computed properties

// computed properties allow to uses an expression or variable to dynamically define object properties the property name defined within sqaure brackets []

const propName = 'age'
const persons = {
    name:"harsh",
    [propName]: 30,
}

console.log(persons.age)



// spread Operator in Objects

// the spread operator (`...`) can be used to create new objects by copying the properties of another objects It is a conveninet way to merge objects or create a shallow copy

const person1 = {
    name:'Harsh',
    age : 30
};

const newPerson = {
    ...person1,
    skills:'webDeveloper'
}

console.log(newPerson)


// Objects Destructuring 

// Object destructuring allows you to extract properties from an object and assign them to varaibles It provides a concise way to access specific values from an object


const person2 = {
    name : 'harsh',
    age : 20,
    skills:"code"
}

const {name,age} = person2

console.log(name)
console.log(age)


// Objects inside Array:
// You can have objects as elements inside an array. This allows you to store and access multiple objects within a single data structure.

const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  console.log(people[0].name); // 'John'
  console.log(people[1].age); // 25
  

//   Nested Destructuring:
//   Nested destructuring allows you to extract properties from objects that are nested inside other objects. It provides a way to access deeply nested values in a concise manner.

const person3 = {
    names: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  const { names, address: { city, country } } = person3;
  
  console.log(name); // 'John'
  console.log(city); // 'New York'
  console.log(country); // 'USA'
  