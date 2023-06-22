// block scope vs funciton scope


// let and const are block scope
// var are function scope

{
    let myName = "harsh"
    console.log(myName);
}

// let and const ko ussi block mai define kr skte hai uske bahr declare nhi ho skte

{
    var firstName = "bhosale"
    console.log(firstName)
}

console.log(firstName)