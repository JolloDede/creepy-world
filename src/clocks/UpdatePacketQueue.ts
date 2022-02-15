import { Game } from "../chars/Game";
import { GameState } from "../helper/Helper";

export default class UpdatepacketQueue {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        setInterval(this.update, 100);
    }

    update = () => {
        if (this.game.gameState === GameState.InGame) {
            this.sendPackets();
        }else {
            console.log("not ingame");
        }
    }

    sendPackets = () => {
        for (let i = 0; i < this.game.packetQueue.length; i++) {
            if (this.game.player.energy > 0) {
                this.game.player.setEnergy(this.game.player.energy-1);
                let packet = this.game.packetQueue.shift();
                if (packet !== undefined) {
                    this.game.packets.add(packet);
                }
            }
        }
    }
}