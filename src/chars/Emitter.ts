import Point from "../helper/Point";
import { Game } from "./Game";

export class Emitter {
    pos: Point;
    strength: number; // output
    game: Game;

    constructor(pos: Point, game: Game) {
        this.game = game;
        this.pos = pos;
        this.strength = 25;
    }

    spawnCreeper = () => {
        this.game.world.tiles[this.pos.x][this.pos.y].creep += this.strength;
    }
}