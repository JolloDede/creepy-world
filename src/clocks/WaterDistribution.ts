import { Game } from "../chars/Game";
import { Point } from "../chars/Player";
import Tile from "../helper/Tile";

export default class WaterDistribution {
    game: Game

    constructor(game: Game) {
        this.game = game;
        setInterval(this.distribute, 500);
    }

    distribute = () => {
        // Copy the current creep away
        for (let i = 0; i < this.game.world.dimensions.x; i++) {
            for (let j = 0; j < this.game.world.dimensions.y; j++) {
                this.game.world.tiles[i][j][0].newcreep = this.game.world.tiles[i][j][0].creep;
            }
        }

        for (let i = 0; i < this.game.world.dimensions.x; i++) {
            for (let j = 0; j < this.game.world.dimensions.y; j++) {
                let height = this.game.world.getHighestTile(new Point(i, j));

                // right side neighbor
                if (i + 1 < this.game.world.dimensions.x) {
                    let height2 = this.game.world.getHighestTile(new Point(i + 1, j));
                    this.transferCreep(height, height2, this.game.world.tiles[i][j][0], this.game.world.tiles[i + 1][j][0]);
                }
                // left side neighbor
                if (i - 1 > -1) {
                    let height2 = this.game.world.getHighestTile(new Point(i - 1, j));
                    this.transferCreep(height, height2, this.game.world.tiles[i][j][0], this.game.world.tiles[i - 1][j][0]);
                }
                // top side neighbor
                if (j + 1 < this.game.world.dimensions.y) {
                    let height2 = this.game.world.getHighestTile(new Point(i, j + 1));
                    this.transferCreep(height, height2, this.game.world.tiles[i][j][0], this.game.world.tiles[i][j + 1][0]);
                }
                // botton side neighbor
                if (j - 1 > -1) {
                    let height2 = this.game.world.getHighestTile(new Point(i, j - 1));
                    this.transferCreep(height, height2, this.game.world.tiles[i][j][0], this.game.world.tiles[i][j - 1][0]);
                }
            }
        }

        // put the values back to draw and fix the creep amount
        for (let i = 0; i < this.game.world.dimensions.x; i++) {
            for (let j = 0; j < this.game.world.dimensions.y; j++) {
                this.game.world.tiles[i][j][0].creep = this.game.world.tiles[i][j][0].newcreep;
                if (this.game.world.tiles[i][j][0].creep > 6) {
                    this.game.world.tiles[i][j][0].creep = 6;
                } else if (this.game.world.tiles[i][j][0].creep < 0.1) {
                    this.game.world.tiles[i][j][0].creep = 0;
                }
            }
        }
    }

    transferCreep = (height: number, height2: number, source: Tile, target: Tile) => {
        let tranferRate = .25;

        let sourceAmount = source.creep;
        let sourceTotal = height + source.creep;

        let targetAmount = target.creep;
        let targetTotal = height2 + target.creep;

        // else there is nothing to move here
        if (sourceAmount > 0 || targetAmount > 0) {
            let delta = 0;
            if (sourceTotal > targetTotal) {
                delta = sourceTotal - targetTotal;
                if (delta > sourceTotal)
                    delta = sourceTotal;
                let tranferDelta = delta * tranferRate;

                source.newcreep -= tranferDelta;
                target.newcreep += tranferDelta;
            }
        }
    }
}
