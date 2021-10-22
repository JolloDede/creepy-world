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
        this.PlayersCollection();
    }

    PlayersCollection() {
        let x = this.player.x;
        let y = this.player.y;
        let lvl = this.map.map[y][x];
        this.addUnderPlayerCollectionFields();
        for (let i = -1; i < this.player.width + 1; i++) {
            if (lvl == this.map.map[y][x + i]) {
                // colfields on top player
                this.player.addCollectionField({ x: x + i, y: y - 1 });
            }
            if (lvl == this.map.map[y + this.player.width][x + i]) {
                // colfields below player
                this.player.addCollectionField({ x: x + i, y: y + this.player.width });
            }
        }
        for (let i = -1; i < this.player.height + 1; i++) {
            if (lvl == this.map.map[y + i][x]) {
                // colfields left player
                this.player.addCollectionField({ x: x - 1, y: y + i });
            }
            if (lvl == this.map.map[y + this.player.width][x + i]) {
                // colfields below player
                this.player.addCollectionField({ x: x + this.player.height, y: y + i });
            }
        }
    }

    addUnderPlayerCollectionFields() {
        for (let i = 0; i < this.player.width; i++) {
            for (let ii = 0; ii < this.player.height; ii++) {
                this.player.addCollectionField({ x: this.player.x + i, y: this.player.y + ii });
            }
        }
    }

    addCollector(x: number, y: number) {
        if (!this.fieldIsOccupied(x, y)) {
            this.player.maybeAddRoute(x, y);
            this.player.addCollector(x, y);
        } else {
            console.log("failed to place a Collector at " + x + " " + y + " is occupied");
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