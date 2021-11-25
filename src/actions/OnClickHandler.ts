import { EBuilding } from "../chars/Building";
import { Game } from "../chars/Game";
import Point from "../helper/Point";

export class OnClickHandler {
    curserState: Curserstate;

    constructor() {
        this.curserState = Curserstate.Null;
    }

    canvasClick(x: number, y: number, game: Game) {
        switch (this.curserState) {
            case Curserstate.Null:
                // here things that are on the canvas get handeld
                console.log("Nothing todo here. Not yet implemented");
                break;

            case Curserstate.Collector:
                console.log("Try to place a Collector at " + x + " " + y);
                game.addBuilding(new Point(x, y), EBuilding.Collector);
                break;

            case Curserstate.Blaster:
                console.log("Try to place a Blaster");
                break;

            default:
                break;
        }
        this.curserState = Curserstate.Null;
    }

    changeCurser(newCurser: Curserstate) {
        console.log("You are holding a " + Curserstate[newCurser]);
        this.curserState = newCurser;
    }
}

export enum Curserstate {
    Null,
    Collector,
    Blaster,
}