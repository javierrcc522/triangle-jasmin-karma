export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

checkType() {
  function() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2)))
      return "not a triangle";
    }
  }
};



import { Triangle} from './../js/triangle.js';

//  Rectangle, Circle add this if multiple classes 
