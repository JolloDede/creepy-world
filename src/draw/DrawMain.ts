import { GameMap } from "../game/GameMap";

export default class DrawMain {
    width: number;
    height: number;
    map: GameMap;
    g: CanvasRenderingContext2D | undefined;

    constructor(map: GameMap) {
        this.width = 0;
        this.height = 0;
        this.map = map;
    }

    render() {
        if (this.g === undefined) return;
        let pixelWidth = Math.round(this.width / this.map.dimensions.x);
        let pixelHeight =  Math.round(this.height / this.map.dimensions.y);

        for (let i = 0; i < this.map.dimensions.y; i++) {
            for (let ii = 0; ii < this.map.dimensions.x; ii++) {
                this.g.beginPath();
                this.g.strokeStyle = "#FFFFFF";
                this.g.strokeRect(pixelWidth*ii, pixelHeight*i, pixelWidth, pixelHeight);
                switch (this.map.map[i][ii]) {
                    case 0:
                        this.g.beginPath();
                        this.g.fillStyle = "#000000";
                        this.g.fillRect(pixelWidth*ii, pixelHeight*i, pixelWidth, pixelHeight);
                        break;

                    case 1:
                        this.g.beginPath();
                        this.g.fillStyle = "#FF0000";
                        this.g.fillRect(pixelWidth*ii, pixelHeight*i, pixelWidth, pixelHeight);
                        break;

                    case 2:
                        this.g.beginPath();
                        this.g.fillStyle = "#008000";
                        this.g.fillRect(pixelWidth*ii, pixelHeight*i, pixelWidth, pixelHeight);
                        break;

                    default:
                        break;
                }
            }
        }
    }

    setWidthHeight(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setRenderContext(g: CanvasRenderingContext2D) {
        this.g = g;
    }
}