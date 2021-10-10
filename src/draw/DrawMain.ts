import Player from "../chars/Player";
import { GameMap } from "../game/GameMap";
import PlayerPath from "../img/Player.png";
import CollectorPath from "../img/Collector.png";

const PlayerImg = new Image();
PlayerImg.src = PlayerPath;

const CollectorImg = new Image();
CollectorImg.src = CollectorPath;

const playerWidth = 5;
const playerHeigth = 5;
const collectorSize = 1;

export default class DrawMain {
    width: number;
    height: number;
    map: GameMap;
    player: Player;
    g: CanvasRenderingContext2D | undefined;

    constructor(map: GameMap, player: Player) {
        this.width = 0;
        this.height = 0;
        this.map = map;
        this.player = player;
    }

    render() {
        if (this.g === undefined) return;
        let pixelWidth = Math.round(this.width / this.map.dimensions.x);
        let pixelHeight = Math.round(this.height / this.map.dimensions.y);

        this.drawMap(pixelWidth, pixelHeight);
        this.g.drawImage(PlayerImg, this.player.x * pixelWidth, this.player.y * pixelHeight, playerWidth * pixelWidth, playerHeigth * pixelHeight);
        this.drawCollectors(pixelWidth, pixelHeight);
    }

    drawMap(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.map.dimensions.y; i++) {
            for (let ii = 0; ii < this.map.dimensions.x; ii++) {
                this.g.beginPath();
                this.g.strokeStyle = "#FFFFFF";
                this.g.strokeRect(pixelWidth * ii, pixelHeight * i, pixelWidth, pixelHeight);
                switch (this.map.map[i][ii]) {
                    case 0:
                        this.g.beginPath();
                        this.g.fillStyle = "#000000";
                        this.g.fillRect(pixelWidth * ii, pixelHeight * i, pixelWidth, pixelHeight);
                        break;

                    case 1:
                        this.g.beginPath();
                        this.g.fillStyle = "#FF0000";
                        this.g.fillRect(pixelWidth * ii, pixelHeight * i, pixelWidth, pixelHeight);
                        break;

                    case 2:
                        this.g.beginPath();
                        this.g.fillStyle = "#008000";
                        this.g.fillRect(pixelWidth * ii, pixelHeight * i, pixelWidth, pixelHeight);
                        break;

                    default:
                        break;
                }
            }
        }
    }

    drawCollectors(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.player.collectors.length; i++) {
            const collector = this.player.collectors[i];
            this.g.drawImage(CollectorImg, collector.x * pixelWidth, collector.y * pixelHeight, collectorSize * pixelWidth, collectorSize * pixelHeight);
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