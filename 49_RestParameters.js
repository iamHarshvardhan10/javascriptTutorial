// rest parameters


// function  myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`)


// }

// myFunc(3,4,56,6,7,7)




function myFunc(...numbers){
    let total = 0;

    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = myFunc(4,5,43,4,3,4,3)


console.log(ans)