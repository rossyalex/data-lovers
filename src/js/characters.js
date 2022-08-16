import data from "../data/harrypotter/data.js";

const { characters } = data;
const originalCharacters = [...characters];
const numberElements = 99;
let characterChunkData = [];
let charactersPortion = [];

/**
 * Metodo para ordenar por género
 */
export const filterGender = (genderSelect) => {
  const characterGender = characters.filter(item => item.gender === genderSelect);
  characterChunkData = spliceIntoChunks(characterGender, numberElements);
  const quantity = characterChunkData.length;
  generatePagination(quantity);
  charactersPortion = characterChunkData[0];
  charactersData();
  paginateEvent();
  return characterChunkData;
}

/**
 * Método para hacer el orden por casa de estudio (House)
 */
export const filterStudyHouse = (house) => {
  const characterStudy = characters.filter((item) => item.house === house);
  characterChunkData = spliceIntoChunks(characterStudy, numberElements);
  const quantity = characterChunkData.length;
  generatePagination(quantity);
  charactersPortion = characterChunkData[0];
  charactersData();
  paginateEvent();
  return characterChunkData;
}

/**
 * Método para hacer un orden
 */
export const filterSpecies = (specie) => {
  const characterSpecie = characters.filter((item) => item.species === specie);
  characterChunkData = spliceIntoChunks(characterSpecie, numberElements);
  const quantity = characterChunkData.length;
  generatePagination(quantity);
  charactersPortion = characterChunkData[0];
  charactersData();
  paginateEvent();
  return characterChunkData;
}

/**
 * Método para separar la data en porciones
 */
function spliceIntoChunks(arr, chunkSize) {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

/**
 * Método para generar la paginación con sus enlaces
 */
function generatePagination(numberPage) {
  const paginationHtml = document.getElementById('pagination');
  paginationHtml.innerHTML = '';
  for (let i = 1; i <= numberPage; i++) {
    paginationHtml.innerHTML += `<a class="paginate-link ${i === 1 ? 'active' : ''}" href="#" data-id="${i}">${i}</a>`
  }
}

/**
 * Método para asociar un addEventListener que cambie de pagina
 */
function paginateEvent() {
  const paginateLink = document.querySelectorAll('.paginate-link');
  paginateLink.forEach(item => {
    item.addEventListener("click", function () {
      const id = item.getAttribute('data-id');
      eachPaginate(id, paginateLink);
      charactersPortion = characterChunkData[id - 1];
      charactersData();
    })
  })
}

/**
 * Método para mostrar activa la página correspondiente
 */
function eachPaginate(id, paginateLink) {
  paginateLink.forEach(item => {
    const dataId = item.getAttribute('data-id');
    if (dataId === id) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

/**
 * Método para generar todos los personajes paginados
 */
export const generalOrder = () => {
  characterChunkData = spliceIntoChunks(originalCharacters, numberElements);
  const quantity = characterChunkData.length;
  generatePagination(quantity);
  charactersPortion = characterChunkData[0];
  charactersData();
  paginateEvent();
  return characterChunkData;
}

/**
 * Método para voltear
 */
function isFlipped() {
  const toTurn = document.querySelectorAll(".card-character");
  toTurn.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("is-flipped");
    });
  });
}

/**
 * Método para realizar orden de characters de forma general
 */
const charactersData = () => {
  const charactersHtml = document.getElementById('charactersCard');
  charactersHtml.innerHTML = "";
  charactersPortion.forEach((character) => {
    const { id, name, birth, species, house, image } = character;
    const imgAlt = 'img/hat.png';
    charactersHtml.innerHTML +=
      `<div class="col-3-character">
          <div class="scene school-card-center">
             <div class="card-character">
                <div class="card_face card-front" data-id="fun-${id}">
                  <h2 class="center">${name} - ${species}</h2>
                  <!-- Condicion si image es undefined (No existe imagen) entonces deja hat.png de lo contrario carga image -->
                  <img class="card-characters-img center" src="${image === undefined ? imgAlt : image}" alt="${name}">
                </div>
                <div class="card_face card-back">
                  <!-- Condicion si birth es null entonces deja vacío de lo contrario carga birth -->
                  <h3> Birthday </h3>
                  <h4 class="center">${birth === null ? 'Not info' : birth}</h4>
                  <h3>House name</h3>
                  <p class="p-card-fun center">${house === null ? 'Not info' : house}</p>
                </div>
            </div>
        </div>
      </div>`;
  })

  isFlipped();
}


