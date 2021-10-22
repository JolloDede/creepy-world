import { Collector } from "./Collector";

export default class Player {
    x: number;
    y: number;
    width: number = 5;
    height: number = 5;
    maxEnergy: number;
    energy: number;
    collection: number;
    starvation: number;
    collectors: Collector[] = [];
    routes: Route[] = [];
    collectionFields: Point[] = [];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.addCollector(42, 29);
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
        }
    }

    maybeAddRoute(x: number, y: number) {
        // player
        let px = this.x + Math.floor(this.width / 2);
        let py = this.y + Math.floor(this.height / 2);
        if (this.pointInRange(this.x + Math.floor(this.width / 2), this.y + Math.floor(this.height / 2), x, y)) {
            this.routes.push(new Route({ x: px, y: py }, { x: x, y: y }));
        }
        for (let i = 0; i < this.collectors.length; i++) {
            const collector = this.collectors[i];
            if (this.pointInRange(collector.x, collector.y, x, y)) {
                this.routes.push(new Route({ x: collector.x, y: collector.y }, { x: x, y: y }));
            }
        }
    }

    // Check whether a point lies strictly inside a given circle
    pointInRange(a: number, b: number, x: number, y: number) {
        let distPoints = (a - x) * (a - x) + (b - y) * (b - y);
        let range = 6 * 6;
        if (distPoints < range) {
            return true;
        } else {
            return false;
        }
    }
}

class Route {
    a: Point;
    b: Point;

    constructor(a: Point, b: Point) {
        this.a = a;
        this.b = b;
    }
}

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}