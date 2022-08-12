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
function printPotions(potions) {
  clear();
  const potionList = document.getElementById("potions-card");
  potions.map((potions) => {
    const newPotion = `<div class="col-3-potions">
      <div class="scene school-card-center">
        <div class="card-potion">
            <div class="card_face card-front">
                <img src="img/spellsandpotion/spells.jpg" class="style-potion" alt="spell">
                <h3 style="margin: 10px">Name</h3>  
            <p>${potions.name}</p>
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
function printSpells(spells) {
  clear();
  const spellList = document.getElementById("potions-card");
  spells.map((spells) => {
    const newSpell = `<div class="col-3">
      <div class="scene">
        <div class="card">
            <div class="card_face card-front">
                <img src="img/spellsandpotion/potions.jpg" class="style-potion" alt="spell">
                <h3 style="margin: 10px">Name</h3>  
            <p>${spells.name}</p>
            </div>
            <div class="card_face card-back">
            <h3>Other Name</h3>  
            <p>${spells.other_name}</p>
            <h3>Pronunciation</h3>  
            <p>${spells.pronunciation}</p>
            <h3>Spell Type</h3>  
            <p>${spells.spell_type}</p>
            <h3>Description</h3>  
            <p>${spells.description}</p>
            <h3>Etymology</h3>  
            <p>${spells.etymology}</p>
            </div>
        </div>
      </div>
    </div>`;
    spellList.insertAdjacentHTML("beforeend", newSpell);
  });
  addEffectToBooks();
}

//Limpia el div
function clear() {
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
