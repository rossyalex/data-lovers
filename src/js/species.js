import data from "../data/harrypotter/data.js";

const speciesSelector = document.getElementById('species');
const { species } = data;

export const speciesData = () => {
  species.forEach(specie => {
    speciesSelector.innerHTML += `<option value="${specie}">${specie}</option>`;
  })
}

