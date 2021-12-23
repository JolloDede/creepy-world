import Point from "../helper/Point";
import Building from "./Building";
import { Game } from "./Game";

export default class Player extends Building {

    constructor(x: number, y: number, game: Game) {
        super(new Point(x, y), game);
        this.health = 40;
        this.maxHealth = 40;
        this.maxEnergy = 40;
        this.setEnergy(10);

        this.built = true;
        this.size = 5;
    }


    setEnergy = (val: number) => {
        let ele = document.getElementById("energy-progress");
        // val
        ele!.innerText = val.toString() + "/" + this.maxEnergy.toString();
        // progressbar
        ele!.style.width = (100 / this.maxEnergy * val).toString() + "%";

        this.energy = val;
    }
}
