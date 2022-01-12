import { Game } from "../chars/Game";
import { Collector } from "../chars/Collector";
import Player from "../chars/Player";
import Blaster from "../chars/Blaster";
import { PacketType } from "../chars/Packet";
import Stabilizer from "../chars/Stabilizer";
import Building from "../chars/Building";
import Point from "../helper/Point";
import { BuildingStatus } from "../helper/Helper";
import DrawTerrain from "./DrawTerrain";

// only that the img get packed with webpack
const PlayerSrc = require("../img/Player.png");
const CollecotrSrc = require("../img/Collector.png");
const EmitterSrc = require("../img/Emitter.png");
const CreeperSrc = require("../img/Creeper.png");
const BlasterSrc = require("../img/Blaster.png");
const StabilizerSrc = require("../img/Stabilizer.png");

const PlayerImg = new Image();
PlayerImg.src = "../img/Player.png";

const CollectorImg = new Image();
CollectorImg.src = "../img/Collector.png";

const EmitterImg = new Image();
EmitterImg.src = "../img/Emitter.png";

const CreeperImg = new Image();
CreeperImg.src = "../img/Creeper.png";

const BlasterImg = new Image();
BlasterImg.src = "../img/Blaster.png";

const StabilizerImg = new Image();
StabilizerImg.src = "../img/Stabilizer.png";

const emitterSize = 1;

export default class DrawMain {
    width: number;
    height: number;
    game: Game;
    g: CanvasRenderingContext2D;
    terrain: DrawTerrain;

    constructor(game: Game, ctx: CanvasRenderingContext2D) {
        this.width = 0;
        this.height = 0;
        this.game = game;
        this.g = ctx;
        // todo set a point
        this.terrain = new DrawTerrain(game.world, new Point(1000, 800));
        this.terrain.setUp();
    }

    render() {
        let pixelWidth = (this.width / this.game.world.dimensions.x);
        let pixelHeight = (this.height / this.game.world.dimensions.y);
        // todo remove
        // this.drawTerain(pixelWidth, pixelHeight);
        this.g.drawImage(this.terrain.getTerrain(), 0, 0, this.width, this.height);
        // this.g.drawImage(this.terrain.getTerrain(), 0, 0);
        // draw enemy
        this.drawEmitter(pixelWidth, pixelHeight);
        // this.drawCreeper(pixelWidth, pixelHeight);
        // draw player
        this.drawRoutes(pixelWidth, pixelHeight);
        this.drawBuildings(pixelWidth, pixelHeight);
        this.drawPackets(pixelWidth, pixelHeight);
        this.drawProjectile(pixelWidth, pixelHeight);
    }

    // todo remove
    drawTerain(pixelWidth: number, pixelHeight: number) {
        // for (let i = 0; i < this.game.world.dimensions.x; i++) {
        //     for (let j = 0; j < this.game.world.dimensions.y; j++) {
        //         switch (this.game.world.tiles[i][j].height) {
        //             case 0:
        //                 this.g.fillStyle = "#bba6a5";
        //                 this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
        //                 break;

        //             case 1:
        //                 this.g.fillStyle = "#95897e";
        //                 this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
        //                 break;

        //             case 2:
        //                 this.g.fillStyle = "#7c6d68";
        //                 this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
        //                 break;

        //             default:
        //                 break;
        //         }
        //         if (this.game.world.tiles[i][j].collector && this.game.world.tiles[i][j].collector?.connected) {
        //             this.g.beginPath();
        //             this.g.fillStyle = "rgba(124,252,0, 0.2)";
        //             this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
        //         }
        //         this.drawShadows(pixelWidth, pixelHeight, new Point(i, j));
        //     }
        // }
    }

    // todo remove
    drawShadows = (pixelWidth: number, pixelHeight: number, pos: Point) => {
        // if (this.g === undefined) return;
        // let height = this.game.world.tiles[pos.x][pos.y].height;
        // this.g.beginPath();
        // this.g.lineWidth = 1;
        // this.g.strokeStyle = "black";
        // if (this.game.world.withinWorld(pos.x + 1, pos.y) && height > this.game.world.tiles[pos.x + 1][pos.y].height) {
        //     this.g.moveTo((pos.x + 1) * pixelWidth, pos.y * pixelHeight);
        //     this.g.lineTo((pos.x + 1) * pixelWidth, pos.y * pixelHeight + pixelHeight);
        // }
        // if (this.game.world.withinWorld(pos.x - 1, pos.y) && height > this.game.world.tiles[pos.x - 1][pos.y].height) {
        //     this.g.moveTo(pos.x * pixelWidth - 1, pos.y * pixelHeight);
        //     this.g.lineTo(pos.x * pixelWidth - 1, pos.y * pixelHeight + pixelHeight);
        // }
        // if (this.game.world.withinWorld(pos.x, pos.y + 1) && height > this.game.world.tiles[pos.x][pos.y + 1].height) {
        //     this.g.moveTo(pos.x * pixelWidth, (pos.y + 1) * pixelHeight);
        //     this.g.lineTo(pos.x * pixelWidth + pixelWidth, (pos.y + 1) * pixelHeight);
        // }
        // if (this.game.world.withinWorld(pos.x, pos.y - 1) && height > this.game.world.tiles[pos.x][pos.y - 1].height) {
        //     this.g.moveTo(pos.x * pixelWidth, pos.y * pixelHeight - 1);
        //     this.g.lineTo(pos.x * pixelWidth + pixelWidth, pos.y * pixelHeight - 1);
        // }
        // this.g.stroke();
    }

    drawBuildings = (pixelWidth: number, pixelHeight: number) => {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.buildings.length; i++) {
            const building = this.game.buildings[i];
            this.drawHealthBar(pixelWidth, pixelHeight, building);
            this.drawEnergyBar(pixelWidth, pixelHeight, building);
            if (!building.built) {
                this.g.filter = "grayscale(1)";
            }
            if (building instanceof Collector) {
                this.g.drawImage(CollectorImg, building.pos.x * pixelWidth, building.pos.y * pixelHeight, building.size * pixelWidth, building.size * pixelHeight);
            } else if (building instanceof Blaster) {
                this.g.drawImage(BlasterImg, building.pos.x * pixelWidth, building.pos.y * pixelHeight, building.size * pixelWidth, building.size * pixelHeight);
            } else if (building instanceof Stabilizer) {
                this.g.drawImage(StabilizerImg, building.pos.x * pixelWidth, building.pos.y * pixelHeight, building.size * pixelWidth, building.size * pixelHeight);
            } else if (building instanceof Player) {
                this.g.drawImage(PlayerImg, this.game.player.pos.x * pixelWidth, this.game.player.pos.y * pixelHeight, this.game.player.size * pixelWidth, this.game.player.size * pixelHeight);
            } else {
                console.log("error cant draw this building");
            }
            this.g.filter = "grayscale(0)";
        }
    }

    drawHealthBar = (pixelWidth: number, pixelHeight: number, build: Building) => {
        if (this.g === undefined) return;
        if (build.health < build.maxHealth) {
            let barPosY = build.pos.y * pixelHeight + pixelHeight * build.size;

            this.g.beginPath();
            this.g.fillStyle = "black";
            this.g.fillRect(build.pos.x * pixelWidth, barPosY, pixelWidth, pixelHeight / 3);

            let barWidth = pixelWidth * build.size / build.maxHealth * build.health;
            this.g.beginPath();
            this.g.fillStyle = "green";
            this.g.fillRect(build.pos.x * pixelWidth, barPosY, barWidth, pixelHeight / 3);
        }
    }

    drawEnergyBar = (pixelWidth: number, pixelHeight: number, build: Building) => {
        if (this.g === undefined) return;
        if (build instanceof Player) return;
        if (build.maxEnergy > 0) {
            this.g.beginPath();
            this.g.fillStyle = "black";
            this.g.fillRect(build.pos.x * pixelWidth, build.pos.y * pixelHeight - pixelHeight / 4, pixelWidth, pixelHeight / 3);

            let barWidth = pixelWidth * build.size / build.maxEnergy * build.energy;
            this.g.beginPath();
            this.g.fillStyle = "red";
            this.g.fillRect(build.pos.x * pixelWidth, build.pos.y * pixelHeight - pixelHeight / 4, barWidth, pixelHeight / 3);
        }
    }

    drawRoutes(pixelWidth: number, pixelHeight: number) {
        for (let i = 0; i < this.game.buildings.length; i++) {
            let centerI = this.game.buildings[i].getCenter();
            let drawCenterI = new Point(centerI.x * pixelWidth, centerI.y * pixelHeight);
            for (let j = 0; j < this.game.buildings.length; j++) {
                if (i != j) {
                    if (this.game.buildings[i].status == BuildingStatus.Idle && this.game.buildings[j].status == BuildingStatus.Idle) {
                        let centerJ = this.game.buildings[j].getCenter();
                        let drawCenterJ = new Point(centerJ.x * pixelWidth, centerJ.y * pixelHeight);

                        let allowedDistance = 5;
                        if (Math.pow(centerJ.x - centerI.x, 2) + Math.pow(centerJ.y - centerI.y, 2) <= Math.pow(allowedDistance, 2)) {
                            this.g.beginPath();
                            this.g.strokeStyle = "white";
                            this.g.lineWidth = 3;
                            this.g.moveTo(drawCenterI.x, drawCenterI.y);
                            this.g.lineTo(drawCenterJ.x, drawCenterJ.y);
                            this.g.stroke();
                        }
                    }
                }
            }
        }
    }

    drawEmitter(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let i = 0; i < this.game.emitters.length; i++) {
            const creeper = this.game.emitters[i];
            this.g.drawImage(EmitterImg, creeper.pos.x * pixelWidth, creeper.pos.y * pixelHeight, emitterSize * pixelWidth, emitterSize * pixelHeight);
        }
    }

    drawCreeper(pixelWidth: number, pixelHeight: number) {
        let crepperTileSize = 16;

        if (this.g === undefined) return;
        for (let i = -this.game.world.dimensions.x; i <= this.game.world.dimensions.x; i++) {
            for (let j = -this.game.world.dimensions.x; j <= this.game.world.dimensions.y; j++) {
                if (this.game.world.withinWorld(i, j)) {
                    let height = this.game.world.tiles[i][j].height;

                    for (let k = 0; k < 9; k++) {
                        if (this.game.world.tiles[i][j].creep > k) {
                            let left = 0, right = 0, up = 0, down = 0;
                            if (i - 1 < 0) {
                                left = 0;
                            } else if (this.game.world.tiles[i - 1][j].creep > k || this.game.world.tiles[i - 1][j].height > height) {
                                left = 1;
                            }
                            if (i + 1 > this.game.world.dimensions.x - 1) {
                                right = 0;
                            } else if (this.game.world.tiles[i + 1][j].creep > k || this.game.world.tiles[i + 1][j].height > height) {
                                right = 1;
                            }
                            if (j - 1 < 0) {
                                up = 0;
                            } else if (this.game.world.tiles[i][j - 1].creep > k || this.game.world.tiles[i][j - 1].height > height) {
                                up = 1;
                            }
                            if (j + 1 > this.game.world.dimensions.y - 1) {
                                down = 0;
                            } else if (this.game.world.tiles[i][j + 1].creep > k || this.game.world.tiles[i][j + 1].height > height) {
                                down = 1;
                            }

                            // index of the Images image 1 is right image 2 is up image 4 is left image 8 is down
                            let index = (8 * down) + (4 * left) + (2 * up) + right;
                            this.g.beginPath();
                            this.g.drawImage(CreeperImg, index * crepperTileSize, 0, crepperTileSize, crepperTileSize,
                                pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                        }
                    }
                }
            }
        }
    }

    drawProjectile(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let projectile of this.game.projectiles) {
            this.g.beginPath();
            this.g.strokeStyle = "red";
            this.g.moveTo(projectile.pos.x * pixelWidth, projectile.pos.y * pixelHeight);
            this.g.lineTo(projectile.targetPos.x * pixelWidth, projectile.targetPos.y * pixelHeight);
            this.g.lineWidth = 1;
            this.g.stroke();
        }
    }

    drawPackets(pixelWidth: number, pixelHeight: number) {
        if (this.g === undefined) return;
        for (let packet of this.game.packets) {
            this.g.beginPath();
            switch (packet.type) {
                case PacketType.Health:
                    this.g.fillStyle = "gray";
                    break;
                case PacketType.Energy:
                    this.g.fillStyle = "red";
                    break;

                default:
                    console.log("Error new PacketType");
                    break;
            }
            this.g.arc(packet.pos.x * pixelWidth, packet.pos.y * pixelHeight, 3, 0, 2 * Math.PI);
            this.g.fill();
        }
    }

    setWidthHeight(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}