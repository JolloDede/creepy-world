import { Game } from "../chars/Game";
import { GameState } from "../helper/Helper";

export default class UpdateProjectiles {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        setInterval(this.update, 100);
    }

    update = () => {
        if (this.game.gameState === GameState.InGame) {
            this.moveProjectiles();
        }else {
            console.log("not ingame");
        }
    }

    moveProjectiles = () => {
        let removeId: number[] = [];
        for (let i = 0; i < this.game.projectiles.length; i++) {
            const projectile = this.game.projectiles[i];
            if (projectile.remove) {
                removeId.push(i);
            }
            projectile.move(this.game);
        }
        // remove projectiles todo maybe doesnt work
        for (let i = 0; i < removeId.length; i++) {
            this.game.projectiles.splice(removeId[i]);
        }
    }
}