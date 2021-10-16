import { Collector } from "./Collector";

export default class Player {
    x: number;
    y: number;
    collectors: Collector[] = [];
    maxEnergy: number;
    energy: number;
    collection: number;
    starvation: number;

    constructor() {
        this.x = 40;
        this.y = 36;
        this.collectors.push(new Collector(42, 29));
        this.maxEnergy = 40;
        this.energy = 10;
        this.collection = 0;
        this.starvation = 0;
    }
}
