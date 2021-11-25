import Point, { pointIsInRange } from "../helper/Point";
import { Collector } from "./Collector";
import { Game } from "./Game";

export default class Building {
    pos: Point;
    size: number = 0;
    health: number;
    built: boolean = false;
    maxHealth: number = 0;
    energy: number;
    maxEnergy: number = 0;
    healthRequests: number = 0;
    energyRequests: number = 0;
    connected: boolean = false;

    game: Game;

    constructor(pos: Point, game: Game) {
        this.health = 0;
        this.pos = pos;
        this.energy = 0;

        // todo needs to be entfernt for having gosts
        this.built = true;

        this.game = game;
    }

    getCenter = () => {
        return new Point(this.pos.x + (this.size / 2), this.pos.y + (this.size / 2));
    }
}

export enum EBuilding {
    Collector,
    Blaster
}