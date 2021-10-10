import DrawMain from "../draw/DrawMain";
import { GameMap } from "../game/GameMap";
import { Curserstate, OnClickHandler } from "./OnClickHandler";

export default class Main {
    clickHandler: OnClickHandler;
    draw: DrawMain;
    game: GameMap;

    constructor() {
        this.clickHandler = new OnClickHandler();
        this.game = new GameMap();
        this.draw = new DrawMain(this.game);
    }

    drawing(): void {
        requestAnimationFrame(this.drawing.bind(this))
        this.draw.render();
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