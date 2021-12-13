import { Game } from "../chars/Game";
import { GameState } from "../helper/Helper";

export default class UpdatePackets {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        setInterval(this.update, 200);
    }

    update = () => {
        if (this.game.gameState === GameState.InGame) {
            this.movePackets();
        }else {
            console.log("not ingame");
        }
    }

    movePackets = () => {
        this.game.packets.forEach(packet => {
            if (packet.remove) {
                this.game.packets.delete(packet);
            }else {
                packet.move();
            }
        })
        // let delIndex: number[] = [];
        // for (let i = 0; i < this.game.packets.length; i++) {
        //     const packet = this.game.packets[i];
        //     if (packet.remove) {
        //         delIndex.push(i);
        //     }else {
        //         packet.move();
        //     }
        // }

        // for (let i = 0; i < delIndex.length; i++) {
        //     this.game.packets.splice(delIndex[i], 1);
        // }
    }
}