// param destructuring 


const person = {
    firstName : "harshit",
    gender : "Male",
    age : "500"
}


function printDetails({firstName , gender , age}){
    console.log(firstName)
    console.log(gender)
    console.log(age)
}

printDetails(person)