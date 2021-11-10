import { Creeper } from "./Creeper";
import { GameMap } from "./Map";
import Player, { Point } from "./Player";

export class Game {
    player: Player;
    map: GameMap;
    creepers: Creeper[] = [];
    gameState: GameState;

    constructor() {
        this.player = new Player(40, 36);
        this.map = new GameMap();
        this.creepers.push(new Creeper(0, 0));
        this.creepers.push(new Creeper(17, 0));
        this.creepers.push(new Creeper(35, 0));
        this.creepers.push(new Creeper(69, 0));
        this.setPlayerCollectionFields();
        this.addCollector(42, 29);
        this.gameState = GameState.InGame;
        this.playerCollection();
    }

    setPlayerCollectionFields() {
        let x = this.player.x - 1;
        let y = this.player.y - 1;
        let lvl = this.map.map[y][x];
        for (let i = 0; i < 7; i++) {
            for (let ii = 0; ii < 7; ii++) {
                if (lvl == this.map.map[y+i][x+ii]) {
                    this.player.addCollectionField({ x: x + ii, y: y + i })
                }
            }        
        }
    }

    playerCollection = () => {
        setInterval(this.player.collectEnergy, 3000);
    }

    addCollectorCollectionFields = (x: number, y: number) => {
        let lvl = this.map.map[y][x];
        // if (!this.collectorIsConnectedToPlayer({ x, y })) return;
        for (let i = -2; i < 3; i++) {
            for (let ii = -2; ii < 3; ii++) {
                if (lvl == this.map.map[y + i][x + ii]) {
                    this.player.addCollectionField({ x: x + ii, y: y + i });
                }
            }
        }
    }

    isPointEqual = (pointA: Point, pointB: Point) => {
        if (pointA.x == pointB.x && pointA.y == pointB.y) return true;
        return false;
    }

    addCollector = (x: number, y: number) => {
        if (!this.fieldIsOccupied(x, y)) {
            this.player.maybeAddRoute(x, y);
            this.player.addCollector(x, y);
            this.addCollectorCollectionFields(x, y);
        } else {
            console.log("failed to place a Collector at " + x + " " + y + " field is occupied");
        }
    }

    fieldIsOccupied = (x: number, y: number) => {
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

export enum GameState {
    InGame,
}