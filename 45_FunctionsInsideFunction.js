// function inside function

function app(){
    const myFunc = () => {
        console.log("Hello World")
    }

    const addNum = (num1,num2) =>{
        return num1 + num2;
    }

    const mulNum = function(num1, num2){
        return num1 * num2;
    }

    function oddEven (num){
        return num % 2 === 0;
    }

    console.log("showed inside function you have")
    myFunc()
    console.log(addNum(3,4))
    console.log(mulNum(3,5))
    console.log(oddEven(3))
}

app();