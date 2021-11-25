import DrawMain from "../draw/DrawMain";
import { Curserstate, OnClickHandler } from "./OnClickHandler";
import { Game, GameState } from "../chars/Game";
import Point from "../helper/Point";

export default class Main {
    clickHandler: OnClickHandler;
    draw: DrawMain;
    game: Game;
    offset: Point = { x: 0, y: 0 };

    constructor() {
        this.clickHandler = new OnClickHandler();
        this.game = new Game();
        this.draw = new DrawMain(this.game);
    }

    run = () => {
        requestAnimationFrame(this.run);
        this.render();
    }

    render(): void {
        this.draw.render();
    }

    setCanvasDim(width: number, height: number) {
        this.draw.setWidthHeight(width, height);
    }

    setCanvasOffset(x: number, y: number) {
        this.offset = { x, y };
    }
    
    onCanvasClick(e: any, width?: number, heigth?: number) {
        width = width ? width : 0;
        heigth = heigth ? heigth : 0;
        let pixelWidth = Math.round(width / this.game.world.dimensions.x);
        let pixelHeight = Math.round(heigth / this.game.world.dimensions.y);
        let x = Math.round((e.clientX - this.offset.x) / pixelWidth);
        let y = Math.round((e.clientY - this.offset.y) / pixelHeight);
        this.clickHandler.canvasClick(x, y, this.game);
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}