import { funData } from "../src/js/fun";

describe('funFacts', () => {

    it('it is a function', () => {
      expect(typeof funData).toBe('function');
    });
  
    it('it is ordered asc', function () {
        document.body.innerHTML = '<div id="funFacts" class="row"></div>';
        const data = funData('asc');
        expect(data[0].type).toBe("Antagonist");

      });
    
      it('it is ordered desc', function () {
        document.body.innerHTML = '<div id="funFacts" class="row"></div>';
        const data = funData('desc');
        expect(data[0].type).toBe("Wands");
      });
  
  });