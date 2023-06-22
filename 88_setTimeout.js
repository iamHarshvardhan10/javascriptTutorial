// synchronous programming vs asynchrous Programming 
// synchronous programming
// javascript is synchronous programming single threaded
console.log("start code")

for(let i=0; i<1000; i++){
    console.log("inside for loop")
}

console.log("code ended")


// setTimeout

// asynchoronous example

console.log("start code")

setTimeout( () => {
    console.log('inside the setTimeOut')
}, 1000);

console.log('code ended')