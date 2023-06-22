// optional chaining


const user = {
    firstName : "harsh",
    // address: {houseNumber : '1234'}
}


console.log(user?.firstName)
console.log(user?.address)
console.log(user?.address.houseNumber)

// optional chaining ko use jb kiya jata tb usme kisi bhi key mai value nhi ho tb woh error deta hai but ussi error ko undefined bata ne ke liye use hota hai
// usse hum ?. isse dekhte hai
