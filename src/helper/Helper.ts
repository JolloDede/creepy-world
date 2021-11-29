import Point from "./Point";

export function distance(pointA: Point, pointB: Point) {
    return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
}

export function getRandomEntry(list: any) {
    let rand = Math.floor(Math.random() * list.length-1)+1;
    return list[rand];
}