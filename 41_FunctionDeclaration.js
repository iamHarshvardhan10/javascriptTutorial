function birthdaySong(){
    console.log("Happy birthday Too You")
}

birthdaySong()


function addTwoNumber(){
    return 2+4
}

console.log(addTwoNumber())


function sumOfTwoNumber(number1 , number2){
    return number1 + number2
} 

const addition = sumOfTwoNumber(3,5)
console.log(addition)


// add or even function

function findOddEven(num){
    return num % 2 === 0;
}

const isOddEven = findOddEven(10)
console.log(isOddEven)


// first character of string
function firstChar(str){
    return str[0]
}

const firstStr = firstChar("ahrsh")
console.log(firstStr)



// index of target if target present in array

function findArray(array , target){
    for(i=0; i<=array.length - 1; i++ ){
        if(array[i]===target){
            return i;
            console.log('Target Matched')
        
        }

    }
    return -1;
}

const newArray = [20,34,56,76,898]
const store = findArray(newArray , 898)
console.log(store)