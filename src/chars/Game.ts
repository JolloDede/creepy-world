import { Emitter } from "./Emitter";
import Player, { Point } from "./Player";
import World from "../helper/World";
import WaterCreation from "../clocks/WaterCreation";
import WaterDistribution from "../clocks/WaterDistribution";

export class Game {
    player: Player;
    emitters: Emitter[] = [];
    gameState: GameState;
    world: World;
    // buildings: Building[];

    constructor() {
        this.player = new Player(40, 36);
        this.world = new World({ x: 70, y: 48 });
        this.world.createWorld();
        this.emitters.push(new Emitter({ x: 0, y: 0 }, this));
        this.emitters.push(new Emitter({ x: 17, y: 0 }, this));
        this.emitters.push(new Emitter({ x: 35, y: 0 }, this));
        this.emitters.push(new Emitter({ x: 69, y: 0 }, this));
        this.setPlayerCollectionFields();
        this.addCollector(42, 29);
        this.gameState = GameState.InGame;

        // clocks
        new WaterCreation(this);
        new WaterDistribution(this);
    }

    setPlayerCollectionFields() {
        // let x = this.player.x - 1;
        // let y = this.player.y - 1;
        // let lvl = this.terain[y][x];
        // for (let i = 0; i < 7; i++) {
        //     for (let ii = 0; ii < 7; ii++) {
        //         if (lvl == this.terain[y+i][x+ii]) {
        //             this.player.addCollectionField({ x: x + ii, y: y + i })
        //         }
        //     }        
        // }
    }

    addCollectorCollectionFields = (x: number, y: number) => {
        // let lvl = this.terain[y][x];
        // // if (!this.collectorIsConnectedToPlayer({ x, y })) return;
        // for (let i = -2; i < 3; i++) {
        //     for (let ii = -2; ii < 3; ii++) {
        //         if (lvl == this.terain[y + i][x + ii]) {
        //             this.player.addCollectionField({ x: x + ii, y: y + i });
        //         }
        //     }
        // }
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

    // getHeight = (pos: Point): number => {
    //     // return this.terain[pos.y][pos.x] + this.waters[pos.y][pos.x];
    // }
}

export enum GameState {
    InGame,
}