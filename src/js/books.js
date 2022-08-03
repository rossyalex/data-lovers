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

//Mostrar libros
export function showBooks() {
  printBooks(data.books);
}

//Función mostrar books
function printBooks(books) {
  clear();
  const bookList = document.getElementById("books-card");
  books.map((book) => {
    const newBook = `<div class="col-3">
        <div class="scene">
          <div class="card">
            <div class="card_face card-front">
              <img src="${book.poster}" class="img-spell2" alt="Harry Potter and the Sorcerer's Stone">
            </div>
            <div class="card_face card-back" id="1">
              <h3>Title</h3>  
              <p>${book.title}</p>
              <h3>Release Day</h3>  
              <p>${book.releaseDay}</p>
              <h3>Description</h3>  
              <p>${book.description}</p>
            </div>
          </div>
        </div>
      </div>`;
    bookList.insertAdjacentHTML("beforeend", newBook);
  });
  addEffectToBooks();
}

//Limpia el div
function clear() {
  document.getElementById("books-card").innerHTML = "";
}

//Funcion para filtrar por año
// @param {"1997", "1998", "1999", "2000", "2003", "2005", "2007", "2016"} releaseDay

// function filterByYear(releaseDay){
//   return harryJson.books.filter(
//     (books) => books.releaseDay === releaseDay
//   );
// }

// document
//   .getElementById("yearFilter")
//   .addEventListener("change", function(e){
//     const filterBooksByYear= filterByYear(e.target.value);
//     clear();
//     showBooks(filterBooksByYear);
//   })

//Funcion para sort alfabeticamente

export function sortBooks(order) {
  const bookSorted = data.books.sort((a, b) => {
    if (order === "asc") return a.title.localeCompare(b.title);
    else if (order === "desc") return b.title.localeCompare(a.title);
  });

  printBooks(bookSorted);
}
