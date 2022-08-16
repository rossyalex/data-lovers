import { generalOrder, filterGender, filterStudyHouse, filterSpecies } from "../src/js/characters";

describe('General Order', () => {

  it('it is a function', () => {
    expect(typeof generalOrder).toBe('function');
  });

  it('it is number pages and first character', () => {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const data = generalOrder();
    expect(data.length).toBe(8);
    expect(data[0][0].name).toBe("Euan Abercrombie");
  });

});

describe('Filter Study House', () => {
  it('it is a function', () => {
    expect(typeof filterStudyHouse).toBe('function');
  });

  it('it is house Gryffindor', () => {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const data = filterStudyHouse('Gryffindor');
    expect(data.length).toBe(1);
  });

  it('it is house Ravenclaw', () => {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const data = filterStudyHouse('Ravenclaw');
    expect(data.length).toBe(1);
  });

  it('it is house Hufflepuff', () => {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const data = filterStudyHouse('Hufflepuff');
    expect(data.length).toBe(1);
  });

  it('it is house Slytherin', () => {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const data = filterStudyHouse('Slytherin');
    expect(data.length).toBe(1);
  });
});

describe('Filter by specie', () => {
  it('it is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('it is a specie Human data is type object', () => {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const data = filterSpecies('Human');
    expect(typeof data).toBe('object')
  });

  it('it is a specie Human', () => {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const data = filterSpecies('Human');
    expect(data.length).toBe(6)
  });
})

describe('Filter Gender', () => {

  it('it is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('it is gender female', function () {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const dataFemale = filterGender('Female');
    expect(dataFemale.length).toBe(3);
  });

  it('it is gender male', function () {
    document.body.innerHTML = `<div id="pagination" class="pagination"></div>`;
    document.body.innerHTML += `<div id="charactersCard" class="row"></div>`;
    const dataMale = filterGender('Male');
    expect(dataMale.length).toBe(5);
  });
});
