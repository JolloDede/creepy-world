import DrawMain from "../draw/DrawMain";
import { Curserstate, OnClickHandler } from "./OnClickHandler";
import { Game } from "../chars/Game";
import Point from "../helper/Point";
import HoverHandler from "./HoverHandler";

export default class Main {
    clickHandler: OnClickHandler;
    draw: DrawMain;
    game: Game;
    offset: Point = { x: 0, y: 0 };

    constructor() {
        this.game = new Game();
        this.clickHandler = new OnClickHandler(this.game);
        new HoverHandler(this.game);

        let canvas = (document.getElementById("canvas") as HTMLCanvasElement);
        this.draw = new DrawMain(this.game, canvas.getContext("2d")!);
        this.draw.setWidthHeight(canvas.width, canvas.height);
        this.run();
    }

    run = () => {
        requestAnimationFrame(this.run);
        // console.time("Hallo");
        this.render();
        // console.timeEnd("Hallo");
    }

    render(): void {
        this.draw.render();
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}