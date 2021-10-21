import { Collector } from "./Collector";
import { Creeper } from "./Creeper";
import { GameMap } from "./Map";
import Player from "./Player";

export class Game {
    player: Player;
    map: GameMap;
    creepers: Creeper[] = [];

    constructor() {
        this.player = new Player(40, 36);
        this.map = new GameMap();
        this.creepers.push(new Creeper(0, 0));
        this.creepers.push(new Creeper(17, 0));
        this.creepers.push(new Creeper(35, 0));  
        this.creepers.push(new Creeper(69, 0));      
    }

    addCollector(x: number, y: number) {
        if (!this.fieldIsOccupied(x, y)) {
            this.player.maybeAddRoute(x, y);
            this.player.addCollector(x, y);
        }else {
            console.log("failed to place a Collector at "+x+" "+y+" is occupied");
        }
    }

    fieldIsOccupied(x: number, y: number) {
        if ((x >= this.player.x && x <= this.player.x + this.player.width) && (y >= this.player.y && y <= this.player.y + this.player.height)) {
            return true;
        }
        // collectors
        for (let i = 0; i < this.player.collectors.length; i++) {
            const collector = this.player.collectors[i];
            if (x == collector.x && y == collector.y) {
                return true;
            }
        }
        return false;
    }
}