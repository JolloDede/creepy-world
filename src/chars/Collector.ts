import Point, { pointIsInRange } from "../helper/Point";
import Building from "./Building";
import { Game } from "./Game";
import Packet, { PacketType } from "./Packet";

export class Collector extends Building {
    collectedEnergy: number = 0;
    connected: boolean = false;

    constructor(pos: Point, game: Game) {
        super(pos, game);
        this.maxHealth = 5;
        
        this.size = 1;
    }

    collectEnergy() {
        if (this.built) {
            let height = this.game.world.tiles[this.pos.x][this.pos.y].height;

            for (let i = -2; i < 3; i++) {
                for (let j = -2; j < 3; j++) {
                    let currentPos = new Point(this.pos.x + i, this.pos.y + j);

                    if (this.game.world.withinWorld(currentPos.x, currentPos.y)) {
                        let tileHeight = this.game.world.tiles[currentPos.x][currentPos.y].height;

                        if (pointIsInRange(new Point(this.pos.x, this.pos.y), new Point(currentPos.x, currentPos.y), 3)) {
                            if (tileHeight === height) {
                                if (this.game.world.tiles[currentPos.x][currentPos.y].collector === this) {
                                    this.collectedEnergy += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.collectedEnergy >= 100) {
            // set connected if packet can be transported to player
            let newEnergy = this.game.player.energy + 1;
            this.collectedEnergy -= 100;
            if (newEnergy > this.game.player.maxEnergy) 
                newEnergy = this.game.player.maxEnergy;
            // check if connected
            let packet = new Packet(this.getCenter(), this.game.player, PacketType.Energy, this.game);
            packet.currentTarget = this;
            this.game.findRoute(packet);
            if (packet.currentTarget != null) {
                this.connected = true;
                this.game.player.setEnergy(newEnergy);
            }else {
                this.connected = false;
            }
        }
    }
}