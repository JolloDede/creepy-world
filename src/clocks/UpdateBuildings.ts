import { Collector } from "../chars/Collector";
import { Game } from "../chars/Game";

export default class UpdateBuildigns {
    game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    update = () => {
        for (let i = 0; i < this.game.buildings.length; i++) {
            const building = this.game.buildings[i];
            if (building instanceof Collector) {
                building.collectEnergy();
            }
        }
    }
}