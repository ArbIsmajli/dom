let par = document.getElementById("abc")
// console.log(par.innerHTML)
// console.log(par.textContent)
// par.textContent = "mirjeta<b>abc</b>"
// par.innerHTML = "mirjeta<b>abc</b>"

let butoni = document.querySelector("button")
console.log(par)


function handlebuttonclick() {
    butoni.innerHTML = "u klikua"
    par[2].textContent = " ky paragraf u shfaq pas klikimit"
}
butoni.addEventListener("click",
    handlebuttonclick
)

let body = document.body
let vargumengjyra = ["red", "green", "blue", "black"]

function ndrrongjyren() {
    let index = (Math.random() * 6 - 1) + 0
    index = Math.round(index)
    console.log(index)
    body.style.backgroundColor = vargumengjyra
    [index]
}
body.addEventListener("click", ndrrongjyren)
