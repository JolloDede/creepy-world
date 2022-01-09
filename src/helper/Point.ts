export default class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}


// Check whether a point lies strictly inside a given circle
function pointInRange(a: number, b: number, x: number, y: number, range: number): boolean {
    let distPoints = (a - x) * (a - x) + (b - y) * (b - y);
    range *= range;
    if (distPoints < range) {
        return true;
    } else {
        return false;
    }
}

export function pointIsInRange(pointA: Point, pointB: Point, range: number): boolean {
    return pointInRange(pointA.x, pointA.y, pointB.x, pointB.y, range);
}

export function isPointEqual(pointA: Point, pointB: Point) {
    if (pointA.x === pointB.x && pointA.y === pointB.y) return true;
    return false;
}