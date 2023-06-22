// clone using object.assign


const obj = {
    key1: "value1",
    key2 : "value2"
}

// const obj2 = obj
// obj.key3 = "value"
// console.log(obj)
// console.log(obj2)



// const obj2 = {...obj}

// another way

const obj2 = Object.assign({} , obj)
obj.key3 = "value3"

console.log(obj)
console.log(obj2)