import data from "../data/harrypotter/data.js";

const charactersHtml = document.getElementById('charactersCard');

const { characters } = data;

const charactersPortion = characters.slice(0, 99);

export const charactersData = () => {
  charactersPortion.forEach((character) => {
    const { id, name, birth, species, house, image } = character;
    const imgAlt = 'img/hat.png';
    charactersHtml.innerHTML +=
      `<div class="col-3">
        <div class="scene">
        <div></div>
          <div class="card-fun-content" data-id="fun-${id}">
            <h3 class="center">${name} - ${species}</h3>
            <!-- Condicion si birth es null entonces deja vacío de lo contrario carga birth -->
            <h4 class="center">${birth === null ? '' : birth}</h4>
            <p class="p-card-fun center">${house === null ? '' : house}</p>
            <!-- Condicion si image es undefined (No existe imagen) entonces deja hat.png de lo contrario carga image -->
            <img class="card-characters-img center" src="${image === undefined ? imgAlt : image}" alt="${name}">
          </div>
        </div>
      </div>`;
  })
}


