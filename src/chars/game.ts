import { Player } from "./player";
import { Universe } from "./universe";

export class Game {
    private universe: Universe;
    private player: Player;

    constructor() {
        this.universe = new Universe();
        this.player = new Player();
    }

    public getUniverse(): Universe {
        return this.universe;
    }

    public getPlayer(): Player{
        return this.player;
    }
}