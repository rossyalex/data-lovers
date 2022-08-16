// import data from "../data/harrypotter/data.js";
import { funData } from "./js/fun.js";
import { showBooks, sortBooks, printBooks } from "./js/books.js";
import {showPotions, filterByPotionsSpells, sortPotions} from "./js/potion.js";

// import data from houses
import { schoolsData } from "./js/schools.js";
import { generalOrder, filterGender, filterStudyHouse, filterSpecies } from "./js/characters.js";
import { speciesData } from "./js/species.js";

//id de Div page
const home = document.getElementById("home");
const fun = document.getElementById("fun");
const characters = document.getElementById("characters");
const books = document.getElementById("books");
const school = document.getElementById("school");
const potions = document.getElementById("potions");
// Menu Id Nav
const home_nav = document.getElementById("home-nav");
const fun_nav = document.getElementById("fun-nav");
const characters_nav = document.getElementById("characters-nav");
const books_nav = document.getElementById("books-nav");
const school_nav = document.getElementById("school-nav");
const potions_nav = document.getElementById("potions-nav");
// Button page
const fun_btn = document.getElementById("fun-btn");
const characters_btn = document.getElementById("characters-btn");
const books_btn = document.getElementById("books-btn");
const school_btn = document.getElementById("school-btn");
const potions_btn = document.getElementById("potions-btn");

// Selector Card
const funSelect = document.getElementById("funSelect");
const bookSelect = document.getElementById("bookSelect");

// Selector Card Howard Schools
const schoolsSelect = document.getElementById("schoolSelect");
const selectPotionSpell= document.getElementById("selectPotionSpell");
const sortPotionSpellSelect= document.getElementById("sortPotionSpell");
// Selectors and filter in characters
const genderCharacter = document.getElementById('genderCharacter');
const studyHouse = document.getElementById('studyHouse');
const species = document.getElementById('species');

// Add event click to NavMenu
home_nav.addEventListener("click", pageShow);
fun_nav.addEventListener("click", pageShow);
characters_nav.addEventListener("click", pageShow);
books_nav.addEventListener("click", pageShow);
school_nav.addEventListener("click", pageShow);
potions_nav.addEventListener("click", pageShow);

// Add event click to buttons Card Principal Page
fun_btn.addEventListener("click", pageShow);
characters_btn.addEventListener("click", pageShow);
books_btn.addEventListener("click", pageShow);
school_btn.addEventListener("click", pageShow);
potions_btn.addEventListener("click", pageShow);



// Event change selector ordered
funSelect.addEventListener("change", funChange);
bookSelect.addEventListener("change", bookChange);
schoolsSelect.addEventListener("change", schoolsChange);
sortPotionSpellSelect.addEventListener("change", sortPotionsSpells);
genderCharacter.addEventListener("change", genderCharacterChange);
studyHouse.addEventListener("change", studyHouseChange);
species.addEventListener("change", specieChange);
selectPotionSpell.addEventListener("change",SelectChangePotionSpells);

// Function execute card fun facts
funData();

// Function that executes show bookss
showBooks();

// Function execute card Howard Schools
schoolsData();

// Function execute get data of all species in selector
speciesData();

// Function execute card of characters
generalOrder();

// Function execute Potions
showPotions();

/**
 * Función para ocultar todas las paginas
 * menos la que elijo darle click
 */
function pageShow() {
  const idSend = this.getAttribute("data-id");
  const pages = [home, fun, characters, books, school, potions];
  pages.forEach((item) => {
    const id = item.getAttribute("id");
    if (id !== idSend) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });

  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("open");
}

/**
 * Función que detecta cambio del selector
 * e internamente vuelve a ordenar los funFacts, book change, potion and spells, school
 */
function funChange(e) {
  funData(e.target.value);
}

function bookChange(e) {
  const sortedBooks= sortBooks(e.target.value);
  printBooks(sortedBooks);
}

function SelectChangePotionSpells(e) {
  filterByPotionsSpells(e.target.value);
}

function sortPotionsSpells(e) {
  sortPotions(e.target.value);
}

function schoolsChange(e) {
  schoolsData(e.target.value);
}

/**
 * Método para devolver los characters según el género
 */
function genderCharacterChange(e) {
  filterGender(e.target.value);
}

/**
 * Método para devolver los characters según la casa de estudio
 */
function studyHouseChange(e) {
  filterStudyHouse(e.target.value)
}

/**
 * Método para ordenar los characters según la specie (Raza)
 */
function specieChange(e) {
  filterSpecies(e.target.value);
}

//Menú desplegable
const menuIcon = document.querySelector("#menu-icon");
menuIcon.addEventListener("click", function () {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("open");
 
});


