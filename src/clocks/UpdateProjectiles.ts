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
        this.game.projectiles.forEach(projectile => {
            if (projectile.remove) {
                this.game.projectiles.delete(projectile);
            }else {
                projectile.move(this.game);
            }
        });
    }
}