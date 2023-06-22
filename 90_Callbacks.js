//callback and callback hell

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")


// setTimeout(()=> {
//     heading1.textContent = 'heading 1'
//     heading1.style.color = "Red"
// },1000)
// setTimeout(()=> {

//     heading2.textContent = 'heading 2'
//     heading2.style.color = "Blue"
// },2000)




// above one is complicated 


setTimeout(() => {
    heading1.textContent = "heading 1";
    heading1.style.color = "purple";

    setTimeout(() => {
        heading2.textContent = "heading2";
        heading2.style.color = "Red"

        setTimeout(() => {
            heading3.textContent = "heading3";
            heading3.style.color = "Green"

            setTimeout(() => {
                heading4.textContent = "heading4";
                heading4.style.color = "Gold"

                setTimeout(() => {
                    heading5.textContent = "heading5";
                    heading5.style.color = "Pink"

                    setTimeout(() => {
                        heading6.textContent = "heading6";
                        heading6.style.color = "Yellow"
                    }, 1000)
                }, 2000)
            }, 2000)
        }, 1000)
    }, 1000)
}, 3000)