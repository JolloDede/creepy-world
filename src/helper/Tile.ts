import { Collector } from "../chars/Collector";

export default class Tile {
    // index = -1;
    full: boolean = false;
    collector: Collector | null = null;
    creep = 0;
    newcreep = 0;
    height = 0;
}