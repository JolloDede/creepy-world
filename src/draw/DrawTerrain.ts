import Point from "../helper/Point";
import World from "../helper/World";
import * as PIXI from 'pixi.js';

export default class DrawTerrain {
    world: World;
    container: PIXI.Container;

    constructor(world: World) {
        this.world = world;
        this.container = new PIXI.Container();
    }

    setUp(x: number, y: number) {
        const fields = new PIXI.Graphics();
        for (let i = 0; i < this.world.dimensions.x; i++) {
            for (let j = 0; j < this.world.dimensions.y; j++) {
                switch (this.world.tiles[i][j].height) {
                    case 0:
                        fields.beginFill(0x7c6d68);
                        break;

                    case 1:
                        fields.beginFill(0x766867);
                        break;

                    case 2:
                        fields.beginFill(0x9b8b85);
                        break;

                    case 3:
                        fields.beginFill(0xcfb1ae);
                        break;

                    default:
                        break;
                }
                fields.drawRect(x * i, y * j, x, y);
                fields.endFill();
            }
        }
        this.container.addChild(fields);
        this.setUpShadow(x, y);
    }

    setUpShadow(x: number, y: number) {
        const path = new PIXI.Graphics();
        for (let i = 0; i < this.world.dimensions.x; i++) {
            for (let j = 0; j < this.world.dimensions.y; j++) {
                let height = this.world.tiles[i][j].height;
                path.lineStyle(1, 0x000000);
                // right
                if (this.world.withinWorld(i + 1, j) && height > this.world.tiles[i + 1][j].height) {
                    path.moveTo((i + 1) * x + 1, j * y);
                    path.lineTo((i + 1) * x + 1, j * y + y);
                }
                // left
                if (this.world.withinWorld(i - 1, j) && height > this.world.tiles[i - 1][j].height) {
                    path.moveTo(i * x - 1, j * y);
                    path.lineTo(i * x - 1, j * y + y);
                }
                // bot
                if (this.world.withinWorld(i, j + 1) && height > this.world.tiles[i][j + 1].height) {
                    path.moveTo(i * x, (j + 1) * y + 1);
                    path.lineTo(i * x + x, (j + 1) * y + 1);
                }
                // top
                if (this.world.withinWorld(i, j - 1) && height > this.world.tiles[i][j - 1].height) {
                    path.moveTo(i * x, j * y - 1);
                    path.lineTo(i * x + x, j * y - 1);
                }
                this.container.addChild(path);
            }
        }
    }

    getTerrain(): PIXI.Container {
        return this.container;
    }
}