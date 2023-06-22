// callback function


function myFunc2(name){
    console.log("Welcome to Your home")
    console.log(`My Name is ${name}`)
}

function myFunc(callback){
    console.log("hello world your inside the func 2")
    callback("harsh");

}

myFunc(myFunc2)


// above explanation


// myfunc ye ek function jiska paramter callback hai jo kisi bhi function ko agr call kr ho ussi function ke under tabhi usse likh skate (wo callback sirf ek notation hai)

// myfunc2 ye dusra function usme name ek parameter hai usko myfunc mai call kiya hai 

// aur myfunc ke under myFunc2 ko call kiya hai issi ke liye isse callback function 