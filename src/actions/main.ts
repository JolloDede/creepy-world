import DrawMain from "../draw/DrawMain";
import { GameMap } from "../game/GameMap";
import { Curserstate, OnClickHandler } from "./OnClickHandler";

export default class Main {
    clickHandler: OnClickHandler;
    draw: DrawMain;

    constructor() {
        this.clickHandler = new OnClickHandler();
        let game = new GameMap();
        this.draw = new DrawMain(game);
    }

    drawing(g: CanvasRenderingContext2D) {
        this.draw.draw(g);
    }

    setCanvasDim(width: number, height: number) {
        this.draw.setWidthHeight(width, height);
    }

    onCanvasClick() {
        this.clickHandler.canvasClick();
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}