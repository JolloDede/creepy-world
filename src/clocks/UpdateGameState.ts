import { Game, GameState } from "../chars/Game";
import Stabilizer from "../chars/Stabilizer";

export class UpdateGameState {
    game: Game;

    constructor(game: Game) {
        this.game = game;
        
        setInterval(this.update, 1);
    }

    update = () => {
        let gameWon = true;
        for (let i = 0; i < this.game.buildings.length; i++) {
            if (this.game.buildings[i] instanceof Stabilizer) {
                if (this.game.buildings[i].health !== this.game.buildings[i].maxHealth) {
                    gameWon = false;
                }
            }
        }
        if (gameWon) {
            this.game.gameState = GameState.Won;
            console.log("You have won the game");
        }
        if (this.game.player.health === 0) {
            this.game.gameState = GameState.Lost;
            console.log("You have lost the game");
        }
    }
}