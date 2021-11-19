import { Point } from "../chars/Player";
import { HeightMap } from "../inits/HeightMap";
import Tile from "./Tile";

export default class World {
    tiles: Tile[][][];
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
                this.tiles[i][j] = [];
                for (let k = 0; k < 6; k++) {
                    this.tiles[i][j][k] = new Tile();               
                }
            }
        }

        let heightMap = HeightMap();

        for (let i = 0; i < this.dimensions.x; i++) {
            for (let j = 0; j < this.dimensions.y; j++) {
                let height = heightMap[j][i];
                for (let k = 0; k <= height; k++) {
                    this.tiles[i][j][k].full = true;
                }
            }
        }
    }

    getHighestTile = (vec: Point): number => {
        let height = -1;
        for (let i = 5; i < -1; i--) {
            if (this.tiles[vec.x][vec.y][i].full) {
                height = i;
                // todo maybe get this break out
                break;
            }
        }
        return height;
    }

    withinWorld(x: number, y: number): boolean {
        return (x > -1 && x < this.dimensions.x && y > -1 && y < this.dimensions.y);
    }
}