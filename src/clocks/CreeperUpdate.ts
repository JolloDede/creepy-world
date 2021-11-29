import { Game } from "../chars/Game";
import Tile from "../helper/Tile";

export default class CreeperUpdate {
    game: Game;
    creeperCounter: number;
    emitterCounter: number;

    constructor(game: Game) {
        this.game = game;
        this.creeperCounter = 0;
        this.emitterCounter = 0;
        
        setInterval(this.distribute, 1);
    }

    distribute = () => {
        this.emitterCounter++;
        if (this.emitterCounter >= 25) {
            this.spawnInCreeper();
            this.emitterCounter = 0;
        }

        for (let i = 0; i < this.game.world.dimensions.x; i++) {
            for (let j = 0; j < this.game.world.dimensions.y; j++) {
                this.game.world.tiles[i][j].newcreep = this.game.world.tiles[i][j].creep;
            }
        }

        this.creeperCounter++;
        if (this.creeperCounter > 25) {
            this.creeperCounter -= 25;
            for (let i = 0; i < this.game.world.dimensions.x; i++) {
                for (let j = 0; j < this.game.world.dimensions.y; j++) {
                    // right side neighbor
                    if (i + 1 < this.game.world.dimensions.x) {
                        this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i + 1][j]);
                    }
                    // left side neighbor
                    if (i - 1 > -1) {
                        this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i - 1][j]);
                    }
                    // top side neighbor
                    if (j + 1 < this.game.world.dimensions.y) {
                        this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i][j + 1]);
                    }
                    // botton side neighbor
                    if (j - 1 > -1) {
                        this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i][j - 1]);
                    }
                }
            }

            // // put the values back to draw and fix the creep amount
            for (let i = 0; i < this.game.world.dimensions.x; i++) {
                for (let j = 0; j < this.game.world.dimensions.y; j++) {
                    if (this.game.world.tiles[i][j].newcreep > 10) {
                        this.game.world.tiles[i][j].newcreep = 10;
                    } else if (this.game.world.tiles[i][j].newcreep < 0.1) {
                        this.game.world.tiles[i][j].newcreep = 0;
                    }
                    this.game.world.tiles[i][j].creep = this.game.world.tiles[i][j].newcreep;
                }
            }
        }
    }

    transferCreep = (source: Tile, target: Tile) => {
        let tranferRate = 0.2;

        if (source.height > -1 && target.height > -1) {
            if (source.creep > 0) {
                let sourceTotal = source.height + source.creep;
                let targetTotal = target.height + target.creep;
                let delta = 0;
                if (sourceTotal > targetTotal) {
                    delta = sourceTotal - targetTotal;
                    if (delta > source.creep)
                        delta = source.creep;
                    let adjustedDelta = delta * tranferRate;

                    source.newcreep -= adjustedDelta;
                    target.newcreep += adjustedDelta;
                }
            }
        }

    }

    spawnInCreeper = () => {
        for (let i = 0; i < this.game.emitters.length; i++) {
            this.game.emitters[i].spawnCreeper();
        }
    }
}