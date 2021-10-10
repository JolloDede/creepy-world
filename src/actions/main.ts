import DrawMain from "../draw/DrawMain";
import { Curserstate, OnClickHandler } from "./OnClickHandler";
import { Game } from "../chars/Game";

export default class Main {
    clickHandler: OnClickHandler;
    draw: DrawMain;
    game: Game;

    constructor() {
        this.clickHandler = new OnClickHandler();
        this.game = new Game();
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