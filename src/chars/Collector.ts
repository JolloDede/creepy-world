import Point, { pointIsInRange } from "../helper/Point";
import Building from "./Building";
import { Game } from "./Game";

export class Collector extends Building {
    collectedEnergy: number = 0;

    constructor(pos: Point, game: Game) {
        super(pos, game);
        this.maxHealth = 5;
        
        this.size = 1;
    }

    collectEnergy() {
        if (this.built && this.connected) {
            let height = this.game.world.tiles[this.pos.x][this.pos.y].height;

            for (let i = -2; i < 3; i++) {
                for (let j = -2; j < 3; j++) {
                    let currentPos = new Point(this.pos.x + i, this.pos.y + j);

                    if (this.game.world.withinWorld(currentPos.x, currentPos.y)) {
                        let tileHeight = this.game.world.tiles[currentPos.x][currentPos.y].height;

                        if (pointIsInRange(new Point(this.pos.x, this.pos.y), new Point(currentPos.x, currentPos.y), 3)) {
                            if (tileHeight === height) {
                                if (this.game.world.tiles[currentPos.x][currentPos.y].collector === this) {
                                    this.collectedEnergy += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.collectedEnergy >= 100) {
            let newEnergy = this.game.player.energy + 1;
            this.collectedEnergy -= 100;
            if (newEnergy > this.game.player.maxEnergy) 
                newEnergy = this.game.player.maxEnergy;
            this.game.player.energy = newEnergy;
        }
    }
}