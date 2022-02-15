import Point from "./Point";

export function distance(pointA: Point, pointB: Point) {
    return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
}

export function getRandomEntry(list: any) {
    let rand = Math.floor(Math.random() * list.length - 1) + 1;
    return list[rand];
}

export function cloneArray(list: any) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        newList.push(list[i]);
    }
    return newList;
}

export enum UpdateAction {
    Add,
    Remove
}

export enum GameState {
    InGame,
    Pause,
    Won,
    Lost
}

export enum EBuilding {
    Collector,
    Blaster,
    Stabilizer
}

export enum BuildingStatus {
    Idle,
    Moving
}