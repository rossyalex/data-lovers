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

//Mostrar Spell
export function showSpells() {
  printSpells(data.spells);
}

//Función mostrar potions
export function printPotions(potions) {
  clear();
  const potionList = document.getElementById("potions-card");
  potions.map((potions) => {
    const newPotion = `<div class="col-3-school potion" id="${potions.id}">
      <div class="scene school-card-center">
        <div class="card">
            <div class="card_face card-front">
                <img src="img/spellsandpotion/spells.jpg" class="style-potion" alt="${potions.name}">
                <h3 style="margin: 10px">Name</h3>  
            <p class="potion-name">${potions.name}</p>
            </div>
            <div class="card_face card-back">
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
export function printSpells(spells) {
  clear();
  const spellList = document.getElementById("potions-card");
  spells.map((spells) => {
    const newSpell = `<div class="col-3-school spell" id="${spells.id}">
      <div class="scene school-card-center">
        <div class="card">
            <div class="card_face card-front">
                <img src="img/spellsandpotion/potions.jpg" class="style-potion" alt="${spells.name}">
                <h3 class="h3-book">Name</h3>  
            <p class="spell-name">${spells.name}</p>
            </div>
            <div class="card_face card-back">
            <h3 class="h3-book">Other Name</h3>  
            <p class="p-spell">${spells.other_name ===null ? "Not info" : spells.other_name}</p>
            <h3 class="h3-book">Pronunciation</h3>  
            <p class="p-spell">${spells.pronunciation ===null ? "Not info" : spells.pronunciation}</p>
            <h3 class="h3-book">Spell Type</h3>  
            <p class="p-spell">${spells.spell_type ===null ? "Not info" : spells.spell_type}</p>
            <h3 class="h3-book">Description</h3>  
            <p class="p-spell">${spells.description ===null ? "Not info" : spells.description}</p>
            </div>
        </div>
      </div>
    </div>`;
    spellList.insertAdjacentHTML("beforeend", newSpell);
  });
  addEffectToBooks();
}

//Limpia el div
export function clear() {
  document.getElementById("potions-card").innerHTML = "";
}

//Funcion para filtrar pociones o hechizos

export function filterByPotionsSpells(type) {
  if (type === "potions") {
    showPotions();
  } else if (type === "spells") {
    showSpells();
  }
}

//Funcion para ordenar alfabeticamente
export function sortPotions(order) {
  const selectPagePotion = document.getElementById("selectPotionSpell");
  let filterType = [];
  if (selectPagePotion.value === "potions") {
    filterType = data.potions;
  } else if (selectPagePotion.value === "spells") {
    filterType = data.spells;
  }

  if (order === "asc") {
    filterType.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (order === "desc") {
    filterType.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  }

  if (selectPagePotion.value === "potions") {
    printPotions(filterType);
  } else if (selectPagePotion.value === "spells") {
    printSpells(filterType);
  }
}
