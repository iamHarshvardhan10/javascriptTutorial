// prototype


function hello(){
    console.log('hello');
}


// javascript function ====> function + object

console.log(hello.name)

// you can add your own properties
hello.ownProperty = "hello good morining"
console.log(hello.ownProperty)


// name property ----> tells function name;
// function provides more useful properties

console.log(hello.prototype)


// only function provides prototype property

if(hello.prototype){
    console.log("I am present")
}else{
    console.log("I am absent")
}


hello.prototype.abc = "abc"
hello.prototype.name = "harsh"
hello.prototype.sing = function(){
    return "hello everyone"
}
console.log(hello.prototype)