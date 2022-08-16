import { schoolsData } from "../src/js/schools";

describe('Hogwarts Schools', () => {

    it('it is a function', () => {
      expect(typeof schoolsData).toBe('function');
    });
  
    it('it is ordered asc', function () {
        document.body.innerHTML = '<div id="schoolCard" class="row"></div>';
        const data = schoolsData('asc');
        expect(data[0].house).toBe("Gryffindor");

      });
    
      it('it is ordered desc', function () {
        document.body.innerHTML = '<div id="schoolCard" class="row"></div>';
        const data = schoolsData('desc');
        expect(data[0].house).toBe("Slytherin");
      });
  
  });