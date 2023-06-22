// objects inside array
// very useful in real world application


const users= [
    {userId : 1 , name: "harsh", gender:"male"},
    {userId : 2 , name : "shree", gender:"male"},
    {userId : 3 , name : "Vinayak", gender:"male"},
    {userId : 4 , name : "Rohit", gender:"male"},
    {userId : 5 , name : "Surya", gender:"male"},
    {userId : 6 , name : "Tim", gender:"male"},

]

console.log(users)

for (let user of users){
    console.log(user)
    console.log(user.name)
    console.log(user["gender"])
}