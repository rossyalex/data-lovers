import data from "../data/harrypotter/data.js";

//Función efecto de card en Book
function addEffectToBooks() {
    const card = document.querySelectorAll(".card");
    card.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("is-flipped");
      });
    });
  }

  //Mostrar Potion
export function showPotions() {
    printPotions(data.books);
  }