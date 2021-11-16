import { Collector } from "./Collector";

export default class Player {
    x: number;
    y: number;
    pos: Point;
    width: number = 5;
    height: number = 5;
    maxEnergy: number;
    energy: number;
    collection: number;
    starvation: number;
    collectors: Collector[] = [];
    connections: Connection[] = [];
    collectionFields: Point[] = [];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.pos = { x: this.x + Math.floor(this.width / 2), y: this.y + Math.floor(this.height / 2) };
        this.maxEnergy = 40;
        this.energy = 10;
        this.collection = 0;
        this.starvation = 0;
    }

    addCollector(x: number, y: number) {
        this.collectors.push(new Collector(x, y));
    }

    addCollectionField(field: Point) {
        let found = false;
        for (let i = 0; i < this.collectionFields.length; i++) {
            if (field.x == this.collectionFields[i].x && field.y == this.collectionFields[i].y) {
                found = true;
            }
        }
        if (!found) {
            this.collectionFields.push(field);
            this.collection = this.collectionFields.length;
        }
    }

    maybeAddRoute(x: number, y: number) {
        // player
        if (pointInRange(this.x + Math.floor(this.width / 2), this.y + Math.floor(this.height / 2), x, y)) {
            this.connections.push(new Connection({ x: this.pos.x, y: this.pos.y }, { x: x, y: y }));
        }
        for (let i = 0; i < this.collectors.length; i++) {
            const collector = this.collectors[i];
            if (pointInRange(collector.x, collector.y, x, y)) {
                this.connections.push(new Connection({ x: collector.x, y: collector.y }, { x: x, y: y }));
            }
        }
    }

    collectEnergy = () => {
        let addEnergy = (this.collectionFields.length / 100);
        this.energy += addEnergy;
        this.energy = +this.energy.toFixed(2);
        console.log("Player update got " + addEnergy + " Energy player has now: " + this.energy);
    }
}

export class Connection {
    a: Point;
    b: Point;

    constructor(a: Point, b: Point) {
        this.a = a;
        this.b = b;
    }
}

export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// Check whether a point lies strictly inside a given circle
function pointInRange(a: number, b: number, x: number, y: number): boolean {
    let distPoints = (a - x) * (a - x) + (b - y) * (b - y);
    let range = 6 * 6;
    if (distPoints < range) {
        return true;
    } else {
        return false;
    }
}

export function pointIsInRange(pointA: Point, pointB: Point): boolean {
    return pointInRange(pointA.x, pointA.y, pointB.x, pointB.y);
}