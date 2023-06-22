// default parameters


// function addTwoNumber(a,b){
//     if(typeof b === 'undefined'){
//         b = 0;
//     }
//     return a+b;
// }

// console.log(addTwoNumber(3))



// using default parameters


function addTwoNumber(a,b=0){
    return a+b;
}

console.log(addTwoNumber(3))