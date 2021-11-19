import { Game } from "../chars/Game";

export class PlayerCollection {

    constructor(game: Game) {
        setInterval(game.player.collectEnergy, 3000);
    }
}