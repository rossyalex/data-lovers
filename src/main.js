// import { example } from './data.js';
// import data from './data/harrypotter/data.js';
import { funData } from "./js/fun.js";
import {showBooks} from "./js/books.js";
import harryJson from "./data/harrypotter/harry.json" assert { type: "json" };

// import data from houses
import { schoolsData } from "./js/schools.js";



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
const bookSelect = document.getElementById('bookSelect');

// Selector Card Howard Schools
const schoolsSelect = document.getElementById('schoolSelect');

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
bookSelect.addEventListener('change', bookChange)

// Event change selector
schoolsSelect.addEventListener('change', schoolsChange);

// Function execute card fun facts
funData();
showBooks(harryJson.books);

// Function execute card Howard Schools
schoolsData();

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

function bookChange() {
  const value = bookSelect.options[bookSelect.selectedIndex].value;
  bookOrder(value);
}

//Menú desplegable
const menuIcon= document.querySelector("#menu-icon");
menuIcon.addEventListener("click", function(){
    const menu=document.querySelector(".nav-links");
    menu.classList.toggle("open");
})

/**
 * Función Howard Schools
 */

function schoolsChange() {
  const valueSchools = schoolsSelect.options[schoolsSelect.selectedIndex].value;
  console.log(valueSchools);
  schoolsData(valueSchools);
}




