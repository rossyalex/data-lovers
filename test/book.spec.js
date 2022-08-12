
import { sortBooks } from "../src/js/books.js";

const bookTest= [
  {
    id: 1, 
    title: "Harry Potter and the Sorcerer's Stone",
    releaseDay: "June 26, 1997",
    author: "J. K. Rowling",
    description: "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    poster: "img/books/thephilosopherstone.jpg"
  },
  {
    id: 2,
    title: "Harry Potter and the chamber of secrets",
    releaseDay: "July 2, 1998",
    author: "J. K. Rowling",
    description: "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle.",
    poster: "img/books/thechamberofsecrets.jpg"
  },
];

//Test sort books
describe('sortBooks',() =>{
    it('is a function', ()=>{
        expect(typeof sortBooks).toBe('function');
    });
    it('Debería retornar los libros en orden alfabético', ()=>{
        expect(sortBooks('a-z', bookTest)).toEqual([
          
          {
            id: 2,
            title: "Harry Potter and the chamber of secrets",
            releaseDay: "July 2, 1998",
            author: "J. K. Rowling",
            description: "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle.",
            poster: "img/books/thechamberofsecrets.jpg"
          },
          {
            id: 1, 
            title: "Harry Potter and the Sorcerer's Stone",
            releaseDay: "June 26, 1997",
            author: "J. K. Rowling",
            description: "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
            poster: "img/books/thephilosopherstone.jpg"
        
          }
        ])
    });
});

describe('sortBooks', () => {
    it('is a function', () => {
      expect(typeof sortBooks).toBe('function');
    });
    it('Deberia retornar un array con todos los elementos ordenados de la a a la z.',() => {
      expect(sortBooks('z-a', bookTest)).toEqual([
        {
          id: 1, 
          title: "Harry Potter and the Sorcerer's Stone",
          releaseDay: "June 26, 1997",
          author: "J. K. Rowling",
          description: "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
          poster: "img/books/thephilosopherstone.jpg"
      
        },
        {
          id: 2,
          title: "Harry Potter and the chamber of secrets",
          releaseDay: "July 2, 1998",
          author: "J. K. Rowling",
          description: "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle.",
          poster: "img/books/thechamberofsecrets.jpg"
        }
      ]);
    }); me
  });