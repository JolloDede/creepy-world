import { HeightMap } from "../inits/HeightMap";
import Point from "./Point";
import Tile from "./Tile";

export default class World {
    tiles: Tile[][];
    dimensions: Point;

    constructor(dim: Point) {
        this.tiles = [];
        this.dimensions = dim;
    }

    createWorld() {
        this.tiles = new Array(this.dimensions.x);
        for (let i = 0; i < this.dimensions.x; i++) {
            this.tiles[i] = new Array(this.dimensions.y);
            for (let j = 0; j < this.dimensions.y; j++) {
                this.tiles[i][j] = new Tile();
            }
        }

        let heightMap = HeightMap();

        for (let i = 0; i < this.dimensions.x; i++) {
            for (let j = 0; j < this.dimensions.y; j++) {
                let height = heightMap[j][i];
                if (height > 6)
                    height = 6;
                this.tiles[i][j].height = height;
            }
        }
    }

    getHighestTile = (vec: Point): number => {
        return this.tiles[vec.x][vec.y].height;
    }

    withinWorld(x: number, y: number): boolean {
        return (x > -1 && x < this.dimensions.x && y > -1 && y < this.dimensions.y);
    }
}