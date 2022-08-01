// import { example } from './data.js';
// import data from './data/harrypotter/data.js';
import { funData } from "./js/fun.js";

const home = document.getElementById('home');
const fun = document.getElementById('fun');
const characters = document.getElementById('characters');
const books = document.getElementById('books');
const school = document.getElementById('school');
const potions = document.getElementById('potions');
// Menu Id Nav
const home_nav = document.getElementById('home-nav');
const fun_nav = document.getElementById('fun-nav');
const characters_nav = document.getElementById('characters-nav');
const books_nav = document.getElementById('books-nav');
const school_nav = document.getElementById('school-nav');
const potions_nav = document.getElementById('potions-nav');
// Button page
const fun_btn = document.getElementById('fun-btn');
const characters_btn = document.getElementById('characters-btn');
const books_btn = document.getElementById('books-btn');
const school_btn = document.getElementById('school-btn');
const potions_btn = document.getElementById('potions-btn');

// Selector Card
const funSelect = document.getElementById('funSelect');

// console.log(data.characters);

// Add event click to NavMenu
home_nav.addEventListener('click', pageShow);
fun_nav.addEventListener('click', pageShow);
characters_nav.addEventListener('click', pageShow);
books_nav.addEventListener('click', pageShow);
school_nav.addEventListener('click', pageShow);
potions_nav.addEventListener('click', pageShow);

// Add event click to buttons Card Principal Page
fun_btn.addEventListener('click', pageShow);
characters_btn.addEventListener('click', pageShow);
books_btn.addEventListener('click', pageShow);
school_btn.addEventListener('click', pageShow);
potions_btn.addEventListener('click', pageShow);

// Event change selector ordered fun facts
funSelect.addEventListener('change', funChange);

// Function execute card
funData();

/**
 * Función para ocultar todas las paginas
 * menos la que elijo darle click
 */
function pageShow() {
  const idSend = this.getAttribute('data-id');
  const pages = [home, fun, characters, books, school, potions];
  pages.forEach(item => {
    const id = item.getAttribute('id');
    if (id !== idSend) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  })
}

/**
 * Función que detecta cambio del selector
 * e internamente vuelve a ordenar los funFacts
 */
function funChange() {
  const value = funSelect.options[funSelect.selectedIndex].value;
  funData(value);
}

const menuIcon= document.querySelector("#menu-icon");
menuIcon.addEventListener("click", function(){
    const menu=document.querySelector(".nav-links");
    menu.classList.toggle("open");
})

// TODO function books HarryPotter
// const card = document.querySelectorAll('.card');
// card.forEach((item) => {
//   item.addEventListener('click', function (){
//     this.classList.toggle('is-flipped');
//   })
// })
