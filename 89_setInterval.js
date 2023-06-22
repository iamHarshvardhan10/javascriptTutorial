// setInterval

// console.log("code start")

// setInterval( () => {
//     console.log(Math.random())
// }, 1000)

// console.log("code ended")




const body = document.body
const button = document.querySelector("button")


const intervalID= setInterval(()=> {
    const red = Math.floor(Math.random() * 126)
    const green = Math.floor(Math.random() * 126)
    const blue = Math.floor(Math.random() * 126)
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;

},100)


button.addEventListener("click" , ()=> {
    clearInterval(intervalID)
    button.textContent = body.style.background;
})