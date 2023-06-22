// nested if else

// its is use inside the if else statement 

let winningNUmber = 19;
let userGuessNumber= +prompt();

if(userGuessNumber === winningNUmber){
    console.log("Your match the number")
}else{
    if(userGuessNumber < winningNUmber){
        console.log("You far away")
    }else{
        console.log("you are closer to the number")
    }

}