// find method

// find the only one char from Array

const array = ["harsh","shree","rohit"]

const isLength = (string) => {
    return string.length === 5;
}

const ans = array.find(isLength)
console.log(ans)


// using object

const users = [
    {userId:1, firstName:"harsh"},
    {userId:2, firstName:"rohit"},
    {userId:3, firstName:"shree"},
]


const storeId = users.find((user) => {
    return user.userId === 2
})

console.log(storeId)