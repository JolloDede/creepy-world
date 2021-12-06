import DrawMain from "../draw/DrawMain";
import { Curserstate, OnClickHandler } from "./OnClickHandler";
import { Game } from "../chars/Game";
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
    
    onCanvasClick(e: any, width: number, heigth: number) {
        let tileWidth = width / this.game.world.dimensions.x;
        let tileHeight = heigth / this.game.world.dimensions.y;

        let x = Math.floor((e.clientX - this.offset.x) / tileWidth);
        let y = Math.floor((e.clientY - this.offset.y) / tileHeight);

        this.clickHandler.canvasClick(x, y, this.game);
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}