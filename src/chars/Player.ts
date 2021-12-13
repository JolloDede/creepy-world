import Point from "../helper/Point";
import Building from "./Building";
import { Game } from "./Game";

export default class Player extends Building {

    constructor(x: number, y: number, game: Game) {
        super(new Point(x, y), game);
        this.health = 40;
        this.maxHealth = 40;
        this.energy = 10;
        this.maxEnergy = 40;

        this.built = true;
        this.size = 5;
    }
}
