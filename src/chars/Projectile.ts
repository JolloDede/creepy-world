import { distance } from "../helper/Helper";
import Point from "../helper/Point";
import { Game } from "./Game";

export default class Projectile {
    pos: Point;
    targetPos: Point;
    speed: Point = new Point(0, 0);
    static baseSpeed = 2;
    rotation: number;
    remove: boolean = false;

    constructor(pos: Point, targetPos: Point, rotation: number) {
        this.pos = pos;
        this.targetPos = targetPos;
        this.rotation = rotation;
    }

    calSpeed() {
        let delta = new Point(this.targetPos.x - this.pos.x, this.targetPos.y - this.pos.y);
        let dist = distance(this.pos, this.targetPos);

        this.speed.x = (delta.x / dist) * Projectile.baseSpeed;
        this.speed.y = (delta.y / dist) * Projectile.baseSpeed;

        if (Math.abs(this.speed.x) > Math.abs(delta.x))
            this.speed.x = delta.x;
        if (Math.abs(this.speed.y) > Math.abs(delta.y))
            this.speed.y = delta.y;
    }

    move(game: Game) {
        this.calSpeed();
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;

        if (this.pos.x < this.targetPos.x + 2 && this.pos.x > this.targetPos.x - 2 && this.pos.y < this.targetPos.y + 2 && this.pos.y > this.targetPos.y - 2) {
            this.remove = true;

            game.world.tiles[this.targetPos.x][this.targetPos.y].creep -= 1;
            if (game.world.tiles[this.targetPos.x][this.targetPos.y].creep < 0) {
                game.world.tiles[this.targetPos.x][this.targetPos.y].creep = 0;
            }
        }
    }
}