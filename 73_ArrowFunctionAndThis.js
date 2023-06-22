// Arrow  function and this 


// Arrow function dont have there own this

const user1 = {
    firstName : "harsh",
    age : 8,
    about : () => {
        console.log(this.firstName , this.age) 
    }
}

user1.about(user1)