
  // Adapter Class
  class Steacken {
    constructor() {
      const newMeat = new Chicken();
  
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            // using the new implementation under the hood
            return newMeat.add(term1, term2);
          case 'sub':
            return newMeat.sub(term1, term2);
          default:
            return NaN;
        }
      };
    }
  }
  
  // usage
  const oldMeat = new Steak();
  console.log(oldMeat.operations(10, 5, 'add')); // 15
  
  const newMeat = new Chicken();
  console.log(newMeat.add(10, 5)); // 15
  
  const adaptedMeat = new Steacken();
  console.log(adaptedMeat.operations(10, 5, 'add')); // 15;