import { Game } from "../chars/Game";

export default class WaterCreation {
    game: Game;

    constructor(game: Game) {
        this.game = game
        setInterval(() => {
            // if ingame
            for (let i = 0; i < this.game.emitters.length; i++) {
                this.game.emitters[i].spawnCreeper();
            }
        }, 1000);
    }
}