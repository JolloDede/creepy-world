import { Collector } from "./Collector";

export default class Player {
    x = 40;
    y = 36;
    collectors: Collector[] = [];

    constructor() {
        this.collectors.push(new Collector(42, 29));
    }

    addCollector(x: number, y: number) {
        this.collectors.push(new Collector(x, y));
    }
}
