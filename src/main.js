// import { example } from './data.js';
import data from './data/harrypotter/data.js';

console.log(data.characters);


const menuIcon= document.querySelector("#menu-icon");
menuIcon.addEventListener("click", function(){
    const menu=document.querySelector(".nav-links");
    menu.classList.toggle("open");
})
