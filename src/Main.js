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