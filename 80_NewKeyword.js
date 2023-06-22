// new keyword

function createUsers(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUsers.prototype.about = function () {
    console.log(this.firstName, this.age)
}

// new keyword

// 1) empty object this = {}
// 2) return this

const user1 = new createUsers("harsh", 18);

user1.about();





// store methods in differnet objects




function CreateUser(firstName, lastName, email, age, address) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  

  
}

CreateUser.prototype.about = function(){
    console.log(`${this.firstName} and ${this.age}`)
}


CreateUser.prototype.is18 = function(){
    return this.age >= 18
}
// above methods are create continueously as million of user gets create and capturing lots of memory to avoid this we are create different objects for methods


const users1 = new CreateUser('harsh', 'bhosale', 'harsh@gmail.com', 18, 'address')
const user2 = new CreateUser('harsh', 'bhosale', 'harsh@gmail.com', 16, 'address')
const user3 = new CreateUser('harsh', 'bhosale', 'harsh@gmail.com', 18, 'address')
const user4 = new CreateUser('harsh', 'bhosale', 'harsh@gmail.com', 18, 'address')

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)


console.log(user1.about())
console.log(user2.is18())