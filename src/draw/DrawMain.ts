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
import * as PIXI from 'pixi.js';

// only that the img get packed with webpack
const PlayerSrc = require("../img/Player.png");
const CollecotrSrc = require("../img/Collector.png");
const EmitterSrc = require("../img/Emitter.png");
const CreeperSrc = require("../img/Creeper.png");
const BlasterSrc = require("../img/Blaster.png");
const StabilizerSrc = require("../img/Stabilizer.png");

const PlayerTex = PIXI.Texture.from("../img/Player.png");
const CollectorTex = PIXI.Texture.from("../img/Collector.png");
const EmitterTex = PIXI.Texture.from("../img/Emitter.png");
const CrepperTex = PIXI.BaseTexture.from("../img/Creeper.png");
const BlasterTex = PIXI.Texture.from("../img/Blaster.png");
const StabilizerTex = PIXI.Texture.from("../img/Stabilizer.png");

export default class DrawMain {
    game: Game;
    terrain: DrawTerrain;
    app: PIXI.Application;

    constructor(game: Game) {
        this.game = game;
        // set up pixi
        this.app = new PIXI.Application({
            view: document.getElementById("canvas") as HTMLCanvasElement,
            width: 800,
            height: 500,
            transparent: true,
            antialias: true
        });
        document.getElementById("display")?.append(this.app.view);
        // todo set a point
        this.terrain = new DrawTerrain(game.world);
        this.terrain.setUp(this.app.renderer.width / this.game.world.dimensions.x, this.app.renderer.height / this.game.world.dimensions.y);
        this.app.ticker.add(() => {
            this.render();
        })
    }

    render() {
        let pixelWidth = (this.app.renderer.width / this.game.world.dimensions.x);
        let pixelHeight = (this.app.renderer.height / this.game.world.dimensions.y);
        // Terrain
        this.app.stage.addChild(this.terrain.getTerrain());
        this.drawCollectionFields(pixelWidth, pixelHeight);
        // draw enemy
        this.drawEmitter(pixelWidth, pixelHeight);
        this.drawCreeper(pixelWidth, pixelHeight);
        // draw player
        this.drawRoutes(pixelWidth, pixelHeight);
        this.drawBuildings(pixelWidth, pixelHeight);
        this.drawPackets(pixelWidth, pixelHeight);
        this.drawProjectile(pixelWidth, pixelHeight);
    }

    drawCollectionFields(x: number, y: number) {
        const fields = new PIXI.Graphics();
        for (let i = 0; i < this.game.world.dimensions.x; i++) {
            for (let j = 0; j < this.game.world.dimensions.y; j++) {
                if (this.game.world.tiles[i][j].collector && this.game.world.tiles[i][j].collector?.connected) {
                    fields.beginFill(0x008000, 0.3);
                    fields.drawRect(x * i, y * j, x, y);
                    fields.endFill();
                }
            }
        }
        this.app.stage.addChild(fields);
    }

    drawBuildings = (x: number, y: number) => {
        const filter = new PIXI.filters.ColorMatrixFilter;
        filter.grayscale(0.3, false);
        for (let building of this.game.buildings) {
            this.drawHealthBar(x, y, building);
            this.drawEnergyBar(x, y, building);
            if (building instanceof Collector) {
                const collector = new PIXI.Sprite(CollectorTex);
                collector.x = building.pos.x * x;
                collector.y = building.pos.y * y;
                collector.width = building.size * x;
                collector.height = building.size * y;
                collector.filters = building.built ? [] : [filter];
                this.app.stage.addChild(collector);
            } else if (building instanceof Blaster) {
                const blaster = new PIXI.Sprite(BlasterTex);
                blaster.x = building.pos.x * x;
                blaster.y = building.pos.y * y;
                blaster.filters = building.built ? [] : [filter];
                blaster.width = building.size * x;
                blaster.height = building.size * y;
                this.app.stage.addChild(blaster);
            } else if (building instanceof Stabilizer) {
                const stabilizer = new PIXI.Sprite(StabilizerTex);
                stabilizer.x = building.pos.x * x;
                stabilizer.y = building.pos.y * y;
                stabilizer.filters = building.built ? [] : [filter];
                stabilizer.width = building.size * x;
                stabilizer.height = building.size * y;
                this.app.stage.addChild(stabilizer);
            } else if (building instanceof Player) {
                const player = new PIXI.Sprite(PlayerTex);
                player.x = building.pos.x * x;
                player.y = building.pos.y * y;
                player.filters = building.built ? [] : [filter];
                player.width = building.size * x;
                player.height = building.size * y;
                this.app.stage.addChild(player);
            } else {
                console.log("error cant draw this building");
            }
        }
    }

    drawHealthBar = (x: number, y: number, build: Building) => {
        const bar = new PIXI.Graphics();
        if (build.health < build.maxHealth) {
            let barPosY = build.pos.y * y + y * build.size;

            bar.beginFill(0x000000);
            bar.drawRect(build.pos.x * x, barPosY, x, y / 3);
            bar.endFill();

            let barWidth = x * build.size / build.maxHealth * build.health;
            bar.beginFill(0x008000);
            bar.drawRect(build.pos.x * x, barPosY, barWidth, y / 3);
            bar.endFill();
        }
        this.app.stage.addChild(bar);
    }

    drawEnergyBar = (x: number, y: number, build: Building) => {
        const bar = new PIXI.Graphics();
        if (build instanceof Player) return;
        if (build.maxEnergy > 0) {
            bar.beginFill(0x000000);
            bar.drawRect(build.pos.x * x, build.pos.y * y - y / 4, x, y / 3);
            bar.endFill();

            let barWidth = x * build.size / build.maxEnergy * build.energy;
            bar.beginFill(0xff0000);
            bar.drawRect(build.pos.x * x, build.pos.y * y - y / 4, barWidth, y / 3)
        }
        this.app.stage.addChild(bar);
    }

    drawRoutes(x: number, y: number) {
        const graphics = new PIXI.Graphics();
        for (let i = 0; i < this.game.buildings.length; i++) {
            let centerI = this.game.buildings[i].getCenter();
            let drawCenterI = new Point(centerI.x * x, centerI.y * y);
            for (let j = 0; j < this.game.buildings.length; j++) {
                if (i != j) {
                    if (this.game.buildings[i].status == BuildingStatus.Idle && this.game.buildings[j].status == BuildingStatus.Idle) {
                        let centerJ = this.game.buildings[j].getCenter();
                        let drawCenterJ = new Point(centerJ.x * x, centerJ.y * y);

                        let allowedDistance = 5;
                        if (Math.pow(centerJ.x - centerI.x, 2) + Math.pow(centerJ.y - centerI.y, 2) <= Math.pow(allowedDistance, 2)) {
                            graphics.beginFill(0xffffff);
                            graphics.lineStyle(3, 0xffffff, 1);
                            graphics.moveTo(drawCenterI.x, drawCenterI.y);
                            graphics.lineTo(drawCenterJ.x, drawCenterJ.y);
                            graphics.closePath();
                            graphics.endFill();
                        }
                    }
                }
            }
        }
        this.app.stage.addChild(graphics);
    }

    drawEmitter(x: number, y: number) {
        for (let emitter of this.game.emitters) {
            const emitterImg = new PIXI.Sprite(EmitterTex);
            emitterImg.x = emitter.pos.x * x;
            emitterImg.y = emitter.pos.y * y;
            emitterImg.width = x;
            emitterImg.height = y;
            this.app.stage.addChild(emitterImg);
        }
    }

    drawCreeper(x: number, y: number) {
        const crepperTileSize = 16;

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
                            const creep = new PIXI.Sprite(new PIXI.Texture(CrepperTex, new PIXI.Rectangle(index * crepperTileSize, 0, crepperTileSize, crepperTileSize)));
                            creep.x = x*i;
                            creep.y = y*j;
                            creep.width = x;
                            creep.height = y;
                            this.app.stage.addChild(creep);
                        }
                    }
                }
            }
        }
    }

    drawProjectile(pixelWidth: number, pixelHeight: number) {
        const graphic = new PIXI.Graphics();
        for (let projectile of this.game.projectiles) {
            graphic.beginFill(0xff0000);
            graphic.lineStyle(1, 0xff0000);
            graphic.moveTo(projectile.pos.x * pixelWidth, projectile.pos.y * pixelHeight);
            graphic.lineTo(projectile.targetPos.x * pixelWidth, projectile.targetPos.y * pixelHeight);
            graphic.closePath();
            graphic.endFill();
        }
        this.app.stage.addChild(graphic);
    }

    drawPackets(pixelWidth: number, pixelHeight: number) {
        const graphic = new PIXI.Graphics();
        for (let packet of this.game.packets) {
            graphic.lineStyle(1, 0x404040);
            switch (packet.type) {
                case PacketType.Health:
                    graphic.beginFill(0x808080);
                    break;
                case PacketType.Energy:
                    graphic.beginFill(0xff0000);
                    break;

                default:
                    console.log("Error new PacketType");
                    break;
            }
            graphic.drawCircle(packet.pos.x * pixelWidth, packet.pos.y * pixelHeight, 4);
            graphic.endFill();
        }
        this.app.stage.addChild(graphic);
    }
}