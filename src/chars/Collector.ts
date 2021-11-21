import Building from "./Building";
import { Point } from "./Player";

export class Collector extends Building {

    constructor(pos: Point) {
        super(pos);
        this.maxHealth = 5;
    }
}