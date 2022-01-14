import Point from "../helper/Point";
import World from "../helper/World";

export default class DrawTerrain {
    canvas: HTMLCanvasElement;
    world: World;
    width: number;
    height: number;
    g: CanvasRenderingContext2D;

    constructor(world: World, size: Point) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = size.x;
        this.canvas.height = size.y;
        this.g = this.canvas.getContext("2d")!;
        this.world = world;
        this.width = size.x / world.dimensions.x;
        this.height = size.y / world.dimensions.y;
    }

    setUp() {
        for (let i = 0; i < this.world.dimensions.x; i++) {
            for (let j = 0; j < this.world.dimensions.y; j++) {
                switch (this.world.tiles[i][j].height) {
                    case 0:
                        this.g.fillStyle = "#bba6a5";
                        this.g.fillRect(this.width * i, this.height * j, this.width, this.height);
                        break;

                    case 1:
                        this.g.fillStyle = "#95897e";
                        this.g.fillRect(this.width * i, this.height * j, this.width, this.height);
                        break;

                    case 2:
                        this.g.fillStyle = "#7c6d68";
                        this.g.fillRect(this.width * i, this.height * j, this.width, this.height);
                        break;

                    default:
                        break;
                }
            }
        }
        this.setUpShadow();
    }

    setUpShadow() {
        for (let i = 0; i < this.world.dimensions.x; i++) {
            for (let j = 0; j < this.world.dimensions.y; j++) {
                let height = this.world.tiles[i][j].height;
                this.g.beginPath();
                this.g.lineWidth = 1;
                this.g.strokeStyle = "black";
                // right
                if (this.world.withinWorld(i + 1, j) && height > this.world.tiles[i + 1][j].height) {
                    this.g.moveTo((i + 1) * this.width + 1, j * this.height);
                    this.g.lineTo((i + 1) * this.width + 1, j * this.height + this.height);
                }
                // left
                if (this.world.withinWorld(i - 1, j) && height > this.world.tiles[i - 1][j].height) {
                    this.g.moveTo(i * this.width - 1, j * this.height);
                    this.g.lineTo(i * this.width - 1, j * this.height + this.height);
                }
                // bot
                if (this.world.withinWorld(i, j + 1) && height > this.world.tiles[i][j + 1].height) {
                    this.g.moveTo(i * this.width, (j + 1) * this.height + 1);
                    this.g.lineTo(i * this.width + this.width, (j + 1) * this.height + 1);
                }
                // top
                if (this.world.withinWorld(i, j - 1) && height > this.world.tiles[i][j - 1].height) {
                    this.g.moveTo(i * this.width, j * this.height - 1);
                    this.g.lineTo(i * this.width + this.width, j * this.height - 1);
                }
                this.g.stroke();
            }
        }
    }

    getTerrain(): HTMLCanvasElement {
        return this.canvas;
    }
}