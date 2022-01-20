// Initiate the program after DOM is loaded
var init = () => {
  const SDE_Program = new Main();
};

// Load the program after when the browser is ready
window.addEventListener("load", init);

class Main {

  private meats: Meat[];

  public constructor() {
      this.meats = [];

      for (let i = 0; i < this.randomNumber(3, 10); i++) {
          this.meats.push(
              new Beef("Beef","Red", this.randomNumber(400, 600)
              )
          );
      }

      this.logMeats();
  };

  private logMeats () {
      meats.forEach(element => console.log(element));
  }

  private randomNumber(min: number, max: number): number {
      return Math.round(Math.random() * (max - min) + min);
  }
}

abstract class Meat {
  protected name: string;
  protected colour: string;
  protected weight: Number;

  constructor(name: string, colour: string, weight: number) {
      this.name = name;
      this.colour = colour;
      this. weight = weight;
  }

  public getName (): string {
      return this.name;
  }

  public getColour (): string {
      return this.colour;
  }

  public getWeight (): number {
      return this.weight;
  }
}

/// <reference path="Meat.ts" />

class Beef extends Meat {
    
  constructor(name: string, colour: string, weight: number) {
      super(name, colour, weight);
  }
}
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
  