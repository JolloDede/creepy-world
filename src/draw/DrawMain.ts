import PlayerPath from "../img/Player.png";
import CollectorPath from "../img/Collector.png";
import CreeperPath from "../img/Creeper.png";
import { Game } from "../chars/Game";

const PlayerImg = new Image();
PlayerImg.src = PlayerPath;

const CollectorImg = new Image();
CollectorImg.src = CollectorPath;

const CreeperImg = new Image();
CreeperImg.src = CreeperPath;

const playerWidth = 5;
const playerHeigth = 5;
const collectorSize = 1;

export default class DrawMain {
    width: number;
    height: number;
    game: Game;
    g: CanvasRenderingContext2D | undefined;

    constructor(game: Game) {
        this.width = 0;
        this.height = 0;
        this.game = game;
    }

    render() {
        if (this.g === undefined) return;
        let pixelWidth = Math.round(this.width / this.game.map.dimensions.x);
        let pixelHeight = Math.round(this.height / this.game.map.dimensions.y);

        this.drawMap(pixelWidth, pixelHeight);
        this.drawCreeper(pixelWidth, pixelHeight);
        this.g.drawImage(PlayerImg, this.game.player.x * pixelWidth, this.game.player.y * pixelHeight, playerWidth * pixelWidth, playerHeigth * pixelHeight);
        this.drawCollectors(pixelWidth, pixelHeight);
        this.drawRoutes(pixelWidth, pixelHeight);
    }

    drawMap(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.map.dimensions.y; i++) {
            for (let ii = 0; ii < this.game.map.dimensions.x; ii++) {
                this.g.beginPath();
                this.g.strokeStyle = "#FFFFFF";
                this.g.strokeRect(pixelWidth * ii, pixelHeight * i, pixelWidth, pixelHeight);
                switch (this.game.map.map[i][ii]) {
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
        for (let i = 0; i < this.game.player.collectors.length; i++) {
            const collector = this.game.player.collectors[i];
            this.g.drawImage(CollectorImg, collector.x * pixelWidth, collector.y * pixelHeight, collectorSize * pixelWidth, collectorSize * pixelHeight);
        }
    }

    drawRoutes(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.player.routes.length; i++) {
            const route = this.game.player.routes[i];
            this.g.beginPath();
            this.g.strokeStyle = "#354bea";
            this.g.moveTo(route.a.x * pixelWidth, route.b.y * pixelHeight);
            this.g.lineTo(route.b.x * pixelWidth, route.b.y * pixelHeight);
            this.g.lineWidth = 5;
            this.g.stroke();
        }
        this.g.lineWidth = 1;
    }

    drawCreeper(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.creepers.length; i++) {
            const creeper = this.game.creepers[i];
            this.g.drawImage(CreeperImg, creeper.x * pixelWidth, creeper.y * pixelHeight, collectorSize * pixelWidth, collectorSize * pixelHeight);
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