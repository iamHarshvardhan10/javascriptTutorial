// store methods in differnet objects

// const storeMethods = {
//     about : function(){
//         console.log(`${this.firstName} and ${this.age}`)
//     },

//     is18 : function(){
//         return this.age >= 18
//     }
// }


function createUser(firstName , lastName , email , age , address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
   
    return user;
}


// use of prototype

createUser.prototype.about = function(){
    console.log(`${this.firstName} and ${this.age}`)
};

createUser.prototype.is18 = function(){
    return this.age >= 18
};



// above methods are create continueously as million of user gets create and capturing lots of memory to avoid this we are create different objects for methods



const user1 = createUser('harsh', 'bhosale','harsh@gmail.com', 18, 'address')
const user2 = createUser('harsh', 'bhosale','harsh@gmail.com', 18, 'address')
const user3 = createUser('harsh', 'bhosale','harsh@gmail.com', 18, 'address')
const user4 = createUser('harsh', 'bhosale','harsh@gmail.com', 18, 'address')

console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)


console.log(user1.about())
console.log(user2.is18())