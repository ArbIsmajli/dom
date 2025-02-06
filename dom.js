// let paragrafi = document.querySelector("p"); //objekt
// // selekton elementin e pare te tipit p
// let paragrafi2 = document.querySelectorAll("p"); //varg
// // selekton te gjitha elementet e tipit p

// let paragrafimeklase = document.querySelector(".p2");
// let paragrafimeklase1 = document.getElementsByClassName("p1");

// let paragrafi3 = document.querySelector("par1");
// let paragrafi4 = document.getElementById("par2");

let par1 = document.getElementById("par1");
let par2 = document.getElementById("par2");

par1.textContent = `arb <br> BABA`;
par2.innerHTML = `arb <br> BEBA`;

let fotoja = document.querySelector("img");
fotoja.src = "e qet naj link te fotos";
// background-color
par1.style.backgroundColor = "red";
fotoja.style.width = "100px";
fotoja.alt = "test alt";

let butoni = document.querySelector("button");
function funksioniX() {
    par2.innerHTML = "butoni u klikua";
}
butoni.addEventListener("click", funksioniX);
