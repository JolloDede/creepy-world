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
        this.game = new Game();
        this.clickHandler = new OnClickHandler(this.game);

        let canvas = (document.getElementById("canvas") as HTMLCanvasElement);
        this.draw = new DrawMain(this.game, canvas.getContext("2d")!);
        this.draw.setWidthHeight(canvas.width, canvas.height);
        this.run();
    }

    run = () => {
        requestAnimationFrame(this.run);
        this.render();
    }

    render(): void {
        this.draw.render();
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}