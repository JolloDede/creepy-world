import DrawMain from "../draw/DrawMain";
import { Curserstate, OnClickHandler } from "./OnClickHandler";
import { Game, GameState } from "../chars/Game";

export default class Main {
    clickHandler: OnClickHandler;
    draw: DrawMain;
    game: Game;

    constructor() {
        this.clickHandler = new OnClickHandler();
        this.game = new Game();
        this.draw = new DrawMain(this.game);
    }

    run = () => {
        requestAnimationFrame(this.run);
        this.render();
    }

    update = () => {
        this.game.player.collectEnergy();
    }

    render(): void {
        this.draw.render();
    }

    setCanvasDim(width: number, height: number) {
        this.draw.setWidthHeight(width, height);
    }
    
    onCanvasClick(e: any, width?: number, heigth?: number) {
        width = width ? width : 0;
        heigth = heigth ? heigth : 0;
        let pixelWidth = Math.round(width / this.game.map.dimensions.x);
        let pixelHeight = Math.round(heigth / this.game.map.dimensions.y);
        let x = Math.round(e.clientX / pixelWidth);
        let y = Math.round(e.clientY / pixelHeight);
        this.clickHandler.canvasClick(x, y, this.game);
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}