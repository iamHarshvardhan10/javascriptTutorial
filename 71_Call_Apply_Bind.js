// CALL APPLY BIND

function about(hobby , favCricket){
    console.log(this.firstName , this.age , hobby , favCricket)
}

const user1 = {
    firstName:"harsh",
    age:25
}

const user2 = {
    firstName:"shree",
    age:29
}



//using call
// call return all the parameter 
about.call(user1 , "cricket" , "Rohit")
about.call(user2 , "cricket" , "Rohit")

// using apply
// apply uses parameters using array
about.apply(user1 , ["cricket", "Rohit"])
about.apply(user2 , ["cricket", "Rohit"])


// using bind
// bind uses parameter return in funciton also

const info = about.bind(user1 , "Cricket" , "Rohit")
info()
