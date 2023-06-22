// object destructuring
const sports = {
    Name : "rohit",
    Team : "Mumbai",
    Role : "batsman"
}

let {Name , Team , ...other} = sports
console.log(Name)
console.log(Team)
console.log(other)
