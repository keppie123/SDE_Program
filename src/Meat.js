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