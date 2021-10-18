import { Collector } from "./Collector";

export default class Player {
    x = 40;
    y = 36;
    collectors: Collector[] = [];
    routes: Route[] = [];

    constructor() {
        this.collectors.push(new Collector(42, 29));
    }

    addCollector(x: number, y: number) {
        this.maybeAddRoute(x, y);
        this.collectors.push(new Collector(x, y));
    }

    maybeAddRoute(x: number, y: number) {
        // player
        if (this.pointInRange(this.x, this.y, x, y)){
            this.routes.push(new Route({ x: this.x, y: this.y }, { x: x, y: y }));
            console.log("hurra player");
        }
        for (let i = 0; i < this.collectors.length; i++) {
            const collector = this.collectors[i];
            if (this.pointInRange(collector.x, collector.y, x, y)){
                console.log("Hurra col");
                this.routes.push(new Route({ x: collector.x, y: collector.y }, { x: x, y: y }));
            }
        }
    }

    // Check whether a point lies strictly inside a given circle
    pointInRange(a: number, b: number, x: number, y: number) {
        let distPoints = (a - x) * (a - x) + (b - y) * (b - y);
        let range = 6;
        if (distPoints < range) {
            return true;
        }else {
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