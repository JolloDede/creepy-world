import { getRandomEntry } from "../helper/Helper";
import Point from "../helper/Point";
import Building from "./Building";
import { Game } from "./Game";
import Projectile from "./Projectile";

export default class Blaster extends Building {
    weaponRadius: Number;

    constructor(pos: Point, game: Game) {
        super(pos, game);
        this.maxHealth = 5;
        // todo remove
        this.health = 5;
        this.size = 1;
        this.maxEnergy = 40;
        this.weaponRadius = 8;
    }

    update = () => {
        // todo remove next line
        this.energy = 1;
        if (this.energy > 0) {
            let targets: Point[] = [];
            for (let r = 0; r < this.weaponRadius; r++) {
                for (let i = this.pos.x - r; i <= this.pos.x + r; i++) {
                    for (let j = this.pos.y - r; j <= this.pos.y + r; j++) {
                        if (this.game.world.withinWorld(i, j)) {
                            if (this.game.world.tiles[i][j].creep > 0) {
                                targets.push(new Point(i, j));
                            }
                        }
                    }
                }
                // shoot the ones that are further away
                if (targets.length > 0) break;
            }
            // select random target
            if (targets.length > 0) {
                let target = getRandomEntry(targets) as Point;
                let dx = target.x - this.getCenter().x;
                let dy = target.y -this.getCenter().y;
                let targetAngle = Math.atan2(dx, dy);

                // fire
                // todo uncomment next line for energy use
                // this.energy -= 1;
                let projectile = new Projectile(this.getCenter(), target, targetAngle);
                this.game.projectiles.push(projectile);
            }
        }
    }
}