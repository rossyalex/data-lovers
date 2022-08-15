import {printSpells, printPotions, clear, sortPotions, filterByPotionsSpells} from "../src/js/potion";
import data from "../src/data/harrypotter/data";

//test print books

describe('clear', () =>{
    it('Debería eliminar pociones y hechizos existentes en el DOM', ()=>{
        document.body.innerHTML = '<div id="potions-card" class="row">TEST_INNERHTML</div>';
        const booksCard= document.getElementById("potions-card");
        clear();
        expect(booksCard.innerHTML).toEqual("");
    });
});

describe('Mostrar pociones y hechizos', () =>{
    
    it('it is a function', () =>{
        expect(typeof printSpells).toBe('function');
    });
    it('it is a function', () =>{
        expect(typeof printPotions).toBe('function');
    });
    it('it is potion', function() {
        document.body.innerHTML = '<div id="potions-card"></div>';
        printPotions(data.potions);
        const potions= document.getElementsByClassName("potion");
        expect(potions.length).toEqual(data.potions.length);
        });
    it('it is spell', function(){
        document.body.innerHTML = '<div id="potions-card"></div>';
        printSpells(data.spells);
        const spells= document.getElementsByClassName("spell");
        expect(spells.length).toEqual(data.spells.length);
    });
});

//Test filter
describe('filterByPotionsSpells', ()=>{
    it('is a function', ()=>{
        expect(typeof filterByPotionsSpells).toBe('function');
    });
    it('Debería retornar pociones', ()=>{
        document.body.innerHTML = '<div id="potions-card"></div>';
        filterByPotionsSpells('potions');
        const potion= document.getElementsByClassName("potion");
        expect(potion.length).toEqual(data.potions.length);
    });
    it('Debería retornar hechizos', ()=>{
        document.body.innerHTML = '<div id="potions-card"></div>';
        filterByPotionsSpells('spells');
        const spell= document.getElementsByClassName("spell");
        expect(spell.length).toEqual(data.spells.length);
    });
});


//Test Sort
describe('sortPotions',() =>{
    it('is a function', ()=>{
        expect(typeof sortPotions).toBe('function');
    });
    it('Debería retornar pociones en orden ascendente', ()=>{
        document.body.innerHTML = 
            `<select id="selectPotionSpell" class="filter-alphabet">
                <option selected value="potions">Potions</option>
                <option value="spells">Spells</option>
            </select>
            <div id="potions-card"></div>`
        sortPotions('asc');
        const potions= document.querySelectorAll('.potion');
        const name= potions[0].querySelector('.potion-name');
        expect(name.innerHTML).toEqual('Ageing Potion');
    });
    it('Debería retornar pociones en orden descendente', ()=>{
        document.body.innerHTML = 
            `<select id="selectPotionSpell" class="filter-alphabet">
                <option selected value="potions">Potions</option>
                <option value="spells">Spells</option>
            </select>
            <div id="potions-card"></div>`
        sortPotions('desc');
        const potions= document.querySelectorAll('.potion');
        const name= potions[0].querySelector('.potion-name');
        expect(name.innerHTML).toEqual('Wolfsbane Potion');
    });
    it('Debería retornar hechizos en orden ascendente', ()=>{
        document.body.innerHTML = 
            `<select id="selectPotionSpell" class="filter-alphabet">
                <option value="potions">Potions</option>
                <option selected value="spells">Spells</option>
            </select>
            <div id="potions-card"></div>`
        sortPotions('asc');
        const potions= document.querySelectorAll('.spell');
        const name= potions[0].querySelector('.spell-name');
        expect(name.innerHTML).toEqual('Aberto');
    });
    it('Debería retornar hechizos en orden descendente', ()=>{
        document.body.innerHTML = 
            `<select id="selectPotionSpell" class="filter-alphabet">
                <option value="potions">Potions</option>
                <option selected value="spells">Spells</option>
            </select>
            <div id="potions-card"></div>`
        sortPotions('desc');
        const potions= document.querySelectorAll('.spell');
        const name= potions[0].querySelector('.spell-name');
        expect(name.innerHTML).toEqual('Wingardium Leviosa');
    });
});