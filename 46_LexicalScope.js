// Lexical Scope
const funcVar = "myVar"
function app(){

    const funcVar = "myVar"
    const muFunc = () => {
        const funcVar = "myVar"
        console.log("Hello WOrld", funcVar)

        const myFunc1 = function(){
            console.log("Hello World", funcVar)
        }
    }

   


    function myFunc2(){}

    console.log("my func")

    muFunc()
}

app();