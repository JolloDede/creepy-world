import { Point } from "./Player";

export default class Building {
    pos: Point;
    health: number
    maxHealth: number = 0;
    energy: number;
    maxEnergy: number = 0;
    healthRequests: number = 0;
    energyRequests: number = 0;

    constructor(pos: Point) {
        this.health = 0;
        this.pos = pos;
        this.energy = 0;
    }
}