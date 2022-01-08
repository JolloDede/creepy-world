import Blaster from "../chars/Blaster";
import { Collector } from "../chars/Collector";
import { Game } from "../chars/Game";
import Stabilizer from "../chars/Stabilizer";
import { BuildingStatus, GameState } from "../helper/Helper";

export default class UpdateBuildigns {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        setInterval(this.update, 1000);
    }

    update = () => {
        if (this.game.gameState === GameState.InGame) {
            this.updateBuildings();
        }else {
            console.log("not ingame");
        }
    }

    updateBuildings = () => {
        for (let i = 0; i < this.game.buildings.length; i++) {
            const building = this.game.buildings[i];
            if (building.connected && building !== this.game.player) {
                building.requestPacket();
            }
            if (building instanceof Collector) {
                building.collectEnergy();
            }
            if (building instanceof Blaster) {
                building.update();
            }
            building.move();

            // take no damage
            if (!(building instanceof Stabilizer) && building.status != BuildingStatus.Moving) {
                building.takeDamage();
            }
        }
    }
}