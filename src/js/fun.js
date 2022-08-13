import data from "../data/harrypotter/data.js";

const { funFacts } = data;

function sortAsc(x, y) {
  return x.type.localeCompare(y.type);
}

function sortDesc(x, y) {
  return y.type.localeCompare(x.type);
}

export const funData = (ordered = 'asc') => {
  const funFact = document.getElementById('funFacts');
  funFact.innerHTML = "";
  ordered === 'asc' ? funFacts.sort(sortAsc) : funFacts.sort(sortDesc);
  funFacts.forEach((item) => {
    const { id, type, content } = item;
    funFact.innerHTML +=
      `<div class="col-3-school">
        <div class="card-fun">
          <div class="card-fun-content" data-id="fun-${id}">
            <h2 class="center">${type}</h2>
            <p class="p-card-fun">${content}</p>
          </div>
        </div>
      </div>`;
  });
  return funFacts;
}
