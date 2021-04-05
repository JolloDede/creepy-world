export class Structure {
    protected pos: Point;
    protected active: boolean;

    constructor() {
        this.pos = { x: 0, y: 0 };
        this.active = false;
    }

    public getPos(): Point{
        return this.pos;
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