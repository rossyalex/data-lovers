import data from "../data/harrypotter/data.js";

const howardSchools = document.getElementById('schoolCard');
const { houses } = data;

function sortAsc(x, y) {
  return x.house.localeCompare(y.house);
}

function sortDesc(x, y) {
  return y.house.localeCompare(x.house);
}

export const schoolsData = (ordered = 'asc') => {
  howardSchools.innerHTML = "";
  ordered === 'asc' ? houses.sort(sortAsc) : houses.sort(sortDesc);
  houses.forEach((item) => {
    const { id, house, day, founder, description, image } = item;
    howardSchools.innerHTML +=
      `<div class="col-3">
        <div class="card-schools toTurn">
          <div class="card-sch-content" data-id="fun-${id}">
            <img src="${image}" class="img-schools" alt="schools">
          </div>
        </div>
      </div>`;
  });
}
