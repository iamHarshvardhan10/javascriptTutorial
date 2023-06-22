// // short syntax


// const user1 = {
//     firstName : "harsh",
//     age: 8,
//     about : function(){
//         console.log(this.firstName , this.age)
//     }
// }

// instead of above megthod we can also use this one too


const user1 = {
    firstName : "harsh",
    age : 45,
    about(){
        console.log(this.firstName , this.age)
    }
}


user1.about()