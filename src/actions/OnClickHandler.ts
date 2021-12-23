import { Game } from "../chars/Game";
import { EBuilding, GameState } from "../helper/Helper";
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
        document.getElementById("canvas")?.addEventListener("click", this.canvasClick);
        document.getElementById("collector")?.addEventListener("click", this.handleCollectorClick);
        document.getElementById("blaster")?.addEventListener("click", this.handleBlasterClick);

        document.getElementById("pause-btn")?.addEventListener("click", this.pauseBtn);
    }

    canvasClick = (e: MouseEvent) => {
        // todo maybe not calculating right
        let canvas = document.getElementById("canvas");
        let tileWidth = canvas!.clientWidth / this.game.world.dimensions.x;
        let tileHeight = canvas!.clientHeight / this.game.world.dimensions.y;

        let x = Math.floor((e.clientX - canvas!.offsetLeft) / tileWidth);
        let y = Math.floor((e.clientY - canvas!.offsetTop) / tileHeight);

        this.gameClick(x, y);
    }

    gameClick(x: number, y: number) {
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

    pauseBtn = () => {
        let ele = document.getElementById("pause-btn");
        if (this.game.gameState === GameState.InGame) {
            this.game.gameState = GameState.Pause;
            ele!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16"> <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" /> </svg>'
        }else if (this.game.gameState === GameState.Pause) {
            this.game.gameState = GameState.InGame;
            ele!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" /> </svg>'
        }
    }
}
