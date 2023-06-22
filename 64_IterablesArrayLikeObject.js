// iterables and Array like objects



// jispe hum for for of loop laga sakte hai
// string , array are iterable


const firstName = "Harsh"
for(let char of firstName){
    console.log(char)
}

const number = ['item1','item2','item3']
for(let num of number){
    console.log(num)
}


// array like object
// jinke pas length property hoti hai
// aur jinko hum index se access kar skte hai
// example :- string

// object are not iterable

