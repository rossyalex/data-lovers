
import { sortBooks } from "./js/books.js";

const dataHarryPotter = [
    {
      "name": "George Weasley",
      "species": "Human",
      "gender": "Male",
      "house": "Gryffindor",
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
      "name": "Dobby",
      "species": "House-elf",
      "gender": "Male",
      "house": null,
      "books_featured_in": [2, 3, 4, 5, 6, 7]
    },
    {
      "name": "Cedric Diggory",
      "species": "Human",
      "gender": "Male",
      "house": "Hufflepuff",
      "books_featured_in": [3, 4, 5, 6, 7]
    },
    {
      "name": "Harry Potter",
      "species": "Human",
      "gender": "Male",
      "house": "Gryffindor",
       "books_featured_in": [1, 2, 3, 4, 5, 6, 7]    
      },
      {
        "name": "Luna Lovegood",
        "species": "Human",
        "gender": "Female",
        "house": "Ravenclaw",
        "books_featured_in": [4, 5, 6, 7]
      },
      {
        "name": "Mafalda",
        "species": "Human",
        "gender": "Female",
        "house": "Slytherin",
        "books_featured_in": [4]
      },
      {
        "name": "Sirius Black",
        "species": "Human",
        "gender": "Male",
        "house": "Gryffindor",
        "books_featured_in": [1, 3, 4, 5, 6, 7]
      },
  ]

      //test de sort ordenado

      const orderNames = [
         
          {
            "name": "Cedric Diggory",
            "species": "Human",
            "gender": "Male",
            "house": "Hufflepuff",
            "books_featured_in": [3, 4, 5, 6, 7]
          },
          {
            "name": "Dobby",
            "species": "House-elf",
            "gender": "Male",
            "house": null,
            "books_featured_in": [2, 3, 4, 5, 6, 7]
          },
          {
            "name": "George Weasley",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
            "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
          },
          {
            "name": "Harry Potter",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
             "books_featured_in": [1, 2, 3, 4, 5, 6, 7]    
            },
            {
              "name": "Luna Lovegood",
              "species": "Human",
              "gender": "Female",
              "house": "Ravenclaw",
              "books_featured_in": [4, 5, 6, 7]
            },
            {
              "name": "Mafalda",
              "species": "Human",
              "gender": "Female",
              "house": "Slytherin",
              "books_featured_in": [4]
            },
            {
              "name": "Sirius Black",
              "species": "Human",
              "gender": "Male",
              "house": "Gryffindor",
              "books_featured_in": [1, 3, 4, 5, 6, 7]
            },
        ]
  
      //test de sort inverso

      const reverseNames = [
        {
          "name": "Sirius Black",
          "species": "Human",
          "gender": "Male",
          "house": "Gryffindor",
          "books_featured_in": [1, 3, 4, 5, 6, 7]
        },
        {
          "name": "Mafalda",
          "species": "Human",
          "gender": "Female",
          "house": "Slytherin",
          "books_featured_in": [4]
        },
        {
          "name": "Luna Lovegood",
          "species": "Human",
          "gender": "Female",
          "house": "Ravenclaw",
          "books_featured_in": [4, 5, 6, 7]
        },
        {
          "name": "Harry Potter",
          "species": "Human",
          "gender": "Male",
          "house": "Gryffindor",
           "books_featured_in": [1, 2, 3, 4, 5, 6, 7]    
          },
          {
            "name": "George Weasley",
            "species": "Human",
            "gender": "Male",
            "house": "Gryffindor",
            "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
          },
          {
            "name": "Dobby",
            "species": "House-elf",
            "gender": "Male",
            "house": null,
            "books_featured_in": [2, 3, 4, 5, 6, 7]
          },
          {
            "name": "Cedric Diggory",
            "species": "Human",
            "gender": "Male",
            "house": "Hufflepuff",
            "books_featured_in": [3, 4, 5, 6, 7]
          },
      ]

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