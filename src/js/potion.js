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
  printPotions(data.potions);
}

//Función mostrar potions
function printPotion(potions) {
  clear();
  const potionList = document.getElementById("potions-card");
  potions.map((potions) => {
    const newPotion = `<div class="col-3">
      <div class="scene">
        <div class="card">
            <div class="card_face card-front">
                <img src="img/spellsandpotion/spells.jpg" class="img-spell" alt="spell">
            </div>
            <div class="card_face card-back">
            <h3>Name</h3>  
            <p>${potions.name}</p>
            <h3>Description</h3>  
            <p>${potions.description}</p>
            </div>
        </div>
      </div>
    </div>`;
    potionList.insertAdjacentHTML("beforeend", newPotion);
  });
  addEffectToBooks();
}

//Función mostrar hechizos
function printPotion(potions) {
  clear();
  const potionList = document.getElementById("potions-card");
  potions.map((potions) => {
    const newPotion = `<div class="col-3">
      <div class="scene">
        <div class="card">
            <div class="card_face card-front">
                <img src="img/spellsandpotion/spells.jpg" class="img-spell" alt="spell">
            </div>
            <div class="card_face card-back">
            <h3>Name</h3>  
            <p>${potions.name}</p>
            <h3>Description</h3>  
            <p>${potions.description}</p>
            </div>
        </div>
      </div>
    </div>`;
    potionList.insertAdjacentHTML("beforeend", newPotion);
  });
  addEffectToBooks();
}

//Limpia el div
function clear() {
  document.getElementById("potions-card").innerHTML = "";
}

//Funcion para sort alfabeticamente

export function sortPotions(order) {
  const potionSorted = data.potions.sort((a, b) => {
    if (order === "asc") return a.name.localeCompare(b.name);
    else if (order === "desc") return b.name.localeCompare(a.name);
  });

  printBooks(potionSorted);
}