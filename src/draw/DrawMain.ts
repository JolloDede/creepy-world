import { GameMap } from "../game/GameMap";

export default class DrawMain {
    width: number;
    height: number;
    map: GameMap;

    constructor(map: GameMap) {
        this.width = 0;
        this.height = 0;
        this.map = map;
    }

    draw(g: CanvasRenderingContext2D) {
        let pixelWidth = Math.round(this.width / 70);
        let pixelHeight =  Math.round(this.height / 48);

        for (let i = 0; i < 5/*this.map.dimensions.y */; i++) {
            for (let ii = 0; ii < this.map.dimensions.x; ii++) {
                switch (this.map.map[i][ii]) {
                    case 0:
                        g.beginPath();
                        g.fillStyle = "#000000";
                        g.fillRect(pixelWidth*ii, pixelHeight*i, pixelWidth, pixelHeight);
                        break;

                    case 1:
                        g.beginPath();
                        g.fillStyle = "#FF0000";
                        g.fillRect(pixelWidth*ii, pixelHeight*i, pixelWidth, pixelHeight);
                        break;

                    case 2:
                        g.beginPath();
                        g.fillStyle = "#008000";
                        g.fillRect(pixelWidth*ii, pixelHeight*i, pixelWidth, pixelHeight);
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
}