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
        <div class="scene">
            <div class="card toTurn">
              <div class="card_face card-front" data-id="fun-${id}">
                <h3>House name</h3> 
                <h4 class="center">${house}</h4>
                <div class="card_face card-back" id="">
                  <h3>Founder</h3> 
                  <h4 class="center">${founder}</h4>
                  <h3>Day</h3> 
                  <p class="p-card-sch">${day}</p>
                  <p class="p-card-sch">${description}</p>
                </div>
                <img src="${image}" class="img-schools " alt="schools">
              </div>
            </div>
        </div>
      </div>`;
  });
}
