// methods 
// function inside object



const person = {
    firstName : "harsh",
    age : 8,
    about: function(){
        console.log(`person name is ${this.firstName} & age is ${this.age}`)

    }   
}

person.about();



// executing function outside the object

function func1() {
    console.log(`person name is ${this.firstName} & age is ${this.age}`)
}

const person1 = {
    firstName : "shree",
    age:'12',
    about: func1
}
const person2 = {
    firstName : "shree",
    age:'12',
    about: func1
}
const person3 = {
    firstName : "shree",
    age:'12',
    about: func1
}


person1.about()