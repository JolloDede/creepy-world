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
    
    // fieldsize = maxwidth / fieldsx
    // x = clientX/
    onCanvasClick(e: any, canvasWidth: number, canvasHeight: number) {
        // let x = Math.round(e.clientX / (canvasWidth / xFields));
        // let y = Math.round(e.clientY / (canvasHeight / yFields));
        // this.game.map[y][x] = this.game.map[y][x] == 2? 0: this.game.map[y][x]+1;
        this.clickHandler.canvasClick();
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}