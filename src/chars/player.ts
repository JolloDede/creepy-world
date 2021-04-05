import { Collector } from "./collector";
import { Structure } from "./structure";

export class Player extends Structure {
    private engery: number;
    private collectors: Collector[];

    constructor() {
        super();
        this.engery = 0;
        this.active = true;
        this.collectors = [];
    }
}