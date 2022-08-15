import { sortBooks, clear, printBooks, showBooks} from "../src/js/books";
import data from "../src/data/harrypotter/data";

//Test sort books
describe('sortBooks',() =>{
    it('is a function', ()=>{
        expect(typeof sortBooks).toBe('function');
    });
    it('Debería retornar los libros en orden ascendente', ()=>{
        const data= sortBooks('asc');
        expect(data[0].title).toEqual("Harry Potter and the chamber of secrets");
    });
    it('Debería retornar los libros en orden descendente', ()=>{
        const data= sortBooks('desc');
        expect(data[0].title).toEqual("Harry Potter and the Sorcerer's Stone");
  });
});

//test print books
describe('clear', () =>{
    it('Debería eliminar books existentes en el DOM', ()=>{
        document.body.innerHTML = '<div id="books-card" class="row">TEST_INNERHTML</div>';
        const booksCard= document.getElementById("books-card");
        clear();
        expect(booksCard.innerHTML).toEqual("");
    });
});

describe('printBooks', ()=>{
    it('is a function', ()=>{
        expect(typeof printBooks).toBe('function');
    })
    it('Debería retornar los libros', ()=>{
        document.body.innerHTML = '<div id="books-card"></div>';
        printBooks(data.books);
        const books= document.getElementsByClassName('book');
        expect(books.length).toEqual(data.books.length);
    });
    it('Debería retornar los libros', ()=>{
        document.body.innerHTML = '<div id="books-card"></div>';
        showBooks();
        const books= document.getElementsByClassName('book');
        expect(books.length).toEqual(data.books.length);
    });
});