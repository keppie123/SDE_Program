class Steak {
    constructor() {
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            return term1 + term2;
          case 'sub':
            return term1 - term2;
          default:
            return NaN;
        }
      };
    }
  }
  