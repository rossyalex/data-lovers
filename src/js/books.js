import data from "../data/harrypotter/data.js";

//Función efecto de card en Book
function addEffectToBooks() {
  const card = document.querySelectorAll(".card-book");
  card.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("is-flipped");
    });
  });
}

//Mostrar libros
export function showBooks() {
  printBooks(data.books);
}

//Función mostrar books
export function printBooks(books) {
  clear();
  const bookList = document.getElementById("books-card");
  books.map((book) => {
    const newBook = `<div class="col-3-school book" id="${book.id}">
        <div class="scene school-card-center">
          <div class="card">
            <div class="card_face card-front">
              <img src="${book.poster}" class="img-spell2" alt="${book.title}">
            </div>
            <div class="card_face card-back">
              <h3 class="h3-book">Title</h3>  
              <p>${book.title}</p>
              <h3 class="h3-book">Release Day</h3>
              <p>${book.releaseDay}</p>
              <h3 class="h3-book">Description</h3>
              <p style="line-height: 1;">${book.description}</p>
            </div>
          </div>
        </div>
      </div>`;
    bookList.insertAdjacentHTML("beforeend", newBook);
  });
  addEffectToBooks();
}

//Limpia el div
export function clear() {
  document.getElementById("books-card").innerHTML = "";
}

//Funcion para sort alfabeticamente

export function sortBooks(order) {
  const bookSorted = data.books.sort((a, b) => {
    if (order === "asc") return a.title.localeCompare(b.title);
    else if (order === "desc") return b.title.localeCompare(a.title);
  });

 return bookSorted;
}
