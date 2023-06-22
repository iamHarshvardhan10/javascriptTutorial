// number are not iterables


// spread operator in array

const array = [1,2,1,47,8,6]
const array2 = [45,778,96,36,25,20,10,23,36,78]

const newArray = [...array, ...array2 , ..."harshvardhan"]

console.log(newArray)


// spread operator in objects

const obj1 = {
    name : "ahrsh",
    age : 25
}

const obj2 = {
    gender : "male",
    study : "computer science"
}

const newArray2 = {...obj1 , ...obj2 , ..."harsh", ...["bhosale", "shree"]}
console.log(newArray2)