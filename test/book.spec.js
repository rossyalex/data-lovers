
import { sortBooks } from "../src/js/books.js";

const titleBooks=books.tittle;

describe('sortBooks',() =>{
    it('is a function', ()=>{
        expect(typeof sortBooks).toBe('function');
    });
    it('Debería retornar los libros en orden alfabético', ()=>{
        expect(sortBooks(dataHarryPotter, 'z-a')).toEqual(reverseNames)
    });
});

describe('sortBooks', () => {
    it('is a function', () => {
      expect(typeof sortBooks).toBe('function');
    });
    it('Deberia retornar un array con todos los elementos ordenados de la a a la z.',() => {
      expect(sortBooks(dataHarryPotter, 'a-z')).toEqual(orderNames);
    }); 
  });