import data from "../data/harrypotter/data.js";


const { houses } = data;

/**
 * Método para ordenar ascendente
 */
function sortAsc(x, y) {
  return x.house.localeCompare(y.house);
}

/**
 * Método para ordenar descendente
 */
function sortDesc(x, y) {
  return y.house.localeCompare(x.house);
}

/**
 * Método para voltear
 */
function isFlipped() {
  const toTurn = document.querySelectorAll(".school-card");
  toTurn.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("is-flipped");
    });
  });
}

export const schoolsData = (ordered = 'asc') => {
  const howardSchools = document.getElementById('schoolCard');
  howardSchools.innerHTML = "";
  ordered === 'asc' ? houses.sort(sortAsc) : houses.sort(sortDesc);
  houses.forEach((item) => {
    const { id, house, day, founder, description, image } = item;
    howardSchools.innerHTML +=
      `<div class="col-3-school">
        <div class="scene school-card-center">
            <div class="school-card">
              <div class="card_face card-front" data-id="fun-${id}">
                <h3>House name</h3>
                <h4 class="center">${house}</h4>
                <img src="${image}" class="img-schools " alt="schools">
              </div>
              <div class="card_face card-back">
                  <h3>Founder</h3>
                  <h4 class="center">${founder}</h4>
                  <h3 class="mb-20">Day</h3>
                  <p class="p-card-sch">${day}</p>
                  <p class="p-card-sch mb-20">${description}</p>
                </div>
            </div>
        </div>
      </div>`;
  });
  isFlipped();
  return houses;
}
