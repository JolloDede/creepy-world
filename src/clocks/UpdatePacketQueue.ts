import { Game } from "../chars/Game";

export default class UpdatepacketQueue {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        setInterval(this.update, 100);
    }

    update = () => {
        for (let i = 0; i < this.game.packetQueue.length; i++) {
            if (this.game.player.energy > 0) {
                this.game.player.energy--;
                let packet = this.game.packetQueue.shift();
                if (packet != undefined) {
                    this.game.packets.push(packet);
                }
            }
        }
    }
}