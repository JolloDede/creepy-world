import { Game } from "../chars/Game";
import { EBuilding } from "../helper/Helper";
import Point from "../helper/Point";

export enum Curserstate {
    Null,
    Collector,
    Blaster,
}

export class OnClickHandler {
    curserState: Curserstate;
    game: Game

    constructor(game: Game) {
        this.curserState = Curserstate.Null;
        this.game = game;
        document.getElementById("canvas")?.addEventListener("click", this.click);
        document.getElementById("collector")?.addEventListener("click", this.handleCollectorClick);
        document.getElementById("blaster")?.addEventListener("click", this.handleBlasterClick);
    }

    click = (e: MouseEvent) => {
        // todo maybe not calculating right
        let canvas = document.getElementById("canvas");
        let tileWidth = canvas!.clientWidth / this.game.world.dimensions.x;
        let tileHeight = canvas!.clientHeight / this.game.world.dimensions.y;

        let x = Math.floor((e.clientX - canvas!.offsetLeft) / tileWidth);
        let y = Math.floor((e.clientY - canvas!.offsetTop) / tileHeight);

        this.canvasClick(x, y);
    }

    canvasClick(x: number, y: number) {
        switch (this.curserState) {
            case Curserstate.Null:
                // here things that are on the canvas get handeld
                console.log("Nothing todo here. Not yet implemented");
                break;

            case Curserstate.Collector:
                console.log("Try to place a Collector at " + x + " " + y);
                this.game.addBuilding(new Point(x, y), EBuilding.Collector);
                break;

            case Curserstate.Blaster:
                console.log("Try to place a Blaster");
                this.game.addBuilding(new Point(x, y), EBuilding.Blaster);
                break;

            default:
                break;
        }
        this.curserState = Curserstate.Null;
    }

    handleCollectorClick = () => {
        this.changeCurser(Curserstate.Collector);
    }

    handleBlasterClick = () => {
        this.changeCurser(Curserstate.Blaster);
    }

    changeCurser(newCurser: Curserstate) {
        console.log("You are holding a " + Curserstate[newCurser]);
        this.curserState = newCurser;
    }
}
