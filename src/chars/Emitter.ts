import { Game } from "./Game";
import { Point } from "./Player";

export class Emitter {
    pos: Point;
    strength: number; // output
    game: Game;

    constructor(pos: Point, game: Game) {
        this.game = game;
        this.pos = pos;
        this.strength = 5;
    }

    spawnCreeper() {
        this.game.world.tiles[this.pos.x][this.pos.y].creep += this.strength;
    }
}