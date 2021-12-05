import { timeStamp } from "console";
import Point from "../helper/Point";
import Building from "./Building";
import { Game } from "./Game";

export default class Stabilizer extends Building {

    constructor(pos: Point, game: Game) {
        super(pos, game);
        this.maxHealth = 20;

        this.built = true;
        this.size = 1;
    }
}