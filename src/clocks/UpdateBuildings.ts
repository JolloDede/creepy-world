import Blaster from "../chars/Blaster";
import { Collector } from "../chars/Collector";
import { Game } from "../chars/Game";

export default class UpdateBuildigns {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        setInterval(this.update, 1000);
    }

    update = () => {
        for (let i = 0; i < this.game.buildings.length; i++) {
            const building = this.game.buildings[i];
            building.requestPacket();
            if (building instanceof Collector) {
                building.collectEnergy();
            }
            if (building instanceof Blaster) {
                building.update();
            }
        }
    }
}