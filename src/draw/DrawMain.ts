import PlayerPath from "../img/Player.png";
import CollectorPath from "../img/Collector.png";
import EmitterPath from "../img/Emitter.png";
import CreeperPath from "../img/Creeper.png";
import { Game } from "../chars/Game";

const PlayerImg = new Image();
PlayerImg.src = PlayerPath;

const CollectorImg = new Image();
CollectorImg.src = CollectorPath;

const EmitterImg = new Image();
EmitterImg.src = EmitterPath;

const CreeperImg = new Image();
CreeperImg.src = CreeperPath;

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

        let pixelWidth = (this.width / this.game.world.dimensions.x);
        let pixelHeight = (this.height / this.game.world.dimensions.y);

        this.drawTerain(pixelWidth, pixelHeight);
        this.drawPlayerCollectionFields(pixelWidth, pixelHeight);
        this.drawEmitter(pixelWidth, pixelHeight);
        // draw player
        this.drawRoutes(pixelWidth, pixelHeight);
        this.drawPlayer(pixelWidth, pixelHeight);
        this.drawCollectors(pixelWidth, pixelHeight);
        this.drawCreeper(pixelWidth, pixelHeight);
    }

    drawTerain(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.world.dimensions.x; i++) {
            for (let j = 0; j < this.game.world.dimensions.y; j++) {
                // todo draws the lines
                this.g.beginPath();
                this.g.strokeStyle = "#FFFFFF";
                this.g.strokeRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                for (let k = 5; k > -1; k--) {
                    if (this.game.world.tiles[i][j][k].full) {
                        switch (k) {
                            case 0:
                                this.g.beginPath();
                                this.g.fillStyle = "#bba6a5";
                                this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                                break;

                            case 1:
                                this.g.beginPath();
                                this.g.fillStyle = "#95897e";
                                this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                                break;

                            case 2:
                                this.g.beginPath();
                                this.g.fillStyle = "#7c6d68";
                                this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                                break;

                            default:
                                break;
                        }
                        // going for the next stack of tiles
                        break;
                    }
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
        for (let i = 0; i < this.game.player.connections.length; i++) {
            const route = this.game.player.connections[i];
            this.g.beginPath();
            this.g.strokeStyle = "#354bea";
            this.g.moveTo(route.a.x * pixelWidth + Math.round(pixelWidth / 2), route.a.y * pixelHeight + Math.round(pixelHeight / 2));
            this.g.lineTo(route.b.x * pixelWidth + Math.round(pixelWidth / 2), route.b.y * pixelHeight + Math.round(pixelHeight / 2));
            this.g.lineWidth = 5;
            this.g.stroke();
        }
        this.g.lineWidth = 1;
    }

    drawEmitter(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.emitters.length; i++) {
            const creeper = this.game.emitters[i];
            this.g.drawImage(EmitterImg, creeper.pos.x * pixelWidth, creeper.pos.y * pixelHeight, collectorSize * pixelWidth, collectorSize * pixelHeight);
        }
    }

    drawPlayer(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        this.g.drawImage(PlayerImg, this.game.player.x * pixelWidth, this.game.player.y * pixelHeight, this.game.player.width * pixelWidth, this.game.player.height * pixelHeight);
    }

    drawPlayerCollectionFields(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.player.collectionFields.length; i++) {
            const field = this.game.player.collectionFields[i];
            this.g.beginPath();
            this.g.fillStyle = "rgba(0, 128, 0, 0.3)";
            this.g.fillRect(pixelWidth * field.x, pixelHeight * field.y, pixelWidth, pixelHeight);
        }
    }

    drawCreeper(pixelWidth: number, pixelHeight: number) {
        let crepperTileSize = 16;
        if (this.g === undefined) return;
        for (let i = -this.game.world.dimensions.x; i <= this.game.world.dimensions.x; i++) {
            for (let j = -this.game.world.dimensions.x; j <= this.game.world.dimensions.y; j++) {
                if (this.game.world.withinWorld(i, j)) {
                    if (this.game.world.tiles[i][j][0].creep > 0) {
                        // this.g.beginPath();
                        // this.g.fillStyle = "rgba(0, 0, 256, 0.5)";
                        // this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);

                        let creep = this.game.world.tiles[i][j][0].creep;

                        let left = 0, right = 0, up = 0, down = 0;
                        if (i - 1 < 0) {
                            left = 0;
                        } else if (Math.ceil(this.game.world.tiles[i - 1][j][0].creep) >= creep) {
                            left = 1;
                        }
                        if (i + 1 > this.game.world.dimensions.x - 1) {
                            right = 0;
                        } else if (Math.ceil(this.game.world.tiles[i + 1][j][0].creep) >= creep) {
                            right = 1;
                        }
                        if (j - 1 < 0) {
                            up = 0;
                        } else if (Math.ceil(this.game.world.tiles[i][j - 1][0].creep) >= creep) {
                            up = 1;
                        }
                        if (j + 1 > this.game.world.dimensions.y - 1) {
                            down = 0;
                        } else if (Math.ceil(this.game.world.tiles[i][j + 1][0].creep) >= creep) {
                            down = 1;
                        }

                        // index of the Images image 1is right image 2 is up image 4 is left image 8 is down
                        let index = (8 * down) + (4 * left) + (2 * up) + right;
                        this.g.beginPath();
                        this.g.drawImage(CreeperImg, index * crepperTileSize, (creep - 1) * crepperTileSize, crepperTileSize, crepperTileSize,
                            pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                    }
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