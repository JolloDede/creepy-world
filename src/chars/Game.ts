import { Creeper } from "./Creeper";
import { GameMap } from "./Map";
import Player from "./Player";

export class Game {
    player: Player;
    map: GameMap;
    creepers: Creeper[] = [];

    constructor() {
        this.player = new Player();
        this.map = new GameMap();
        this.creepers.push(new Creeper(0, 0));
        this.creepers.push(new Creeper(17, 0));
        this.creepers.push(new Creeper(35, 0));  
        this.creepers.push(new Creeper(69, 0));      
    }
}