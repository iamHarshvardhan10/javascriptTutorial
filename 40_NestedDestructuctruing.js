const users= [
    {userId : 1 , name: "harsh", gender:"male"},
    {userId : 2 , name : "shree", gender:"male"},
    {userId : 3 , name : "Vinayak", gender:"male"},
    {userId : 4 , name : "Rohit", gender:"male"},
    {userId : 5 , name : "Surya", gender:"male"},
    {userId : 6 , name : "Tim", gender:"male"},

]


const [user1 , user2 , user3 , user4 , user5] = users
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)

const [{userId} , {name} ,  , {gender}] = users
console.log(userId)
console.log(name)
console.log(gender)

