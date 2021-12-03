import { delimiter } from "path";
import { Game } from "../chars/Game";

export default class UpdatePackets {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        setInterval(this.update, 200);
    }

    update = () => {
        let delIndex: number[] = [];
        for (let i = 0; i < this.game.packets.length; i++) {
            const packet = this.game.packets[i];
            if (packet.remove) {
                delIndex.push(i);
            }else {
                packet.move();
            }
        }

        for (let i = 0; i < delIndex.length; i++) {
            this.game.packets.splice(delIndex[i], 1);
        }
    }
}