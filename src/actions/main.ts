import DrawMain from "../draw/DrawMain";
import { Curserstate, OnClickHandler } from "./OnClickHandler";
import { Game } from "../chars/Game";
import Point from "../helper/Point";
import HoverHandler from "./HoverHandler";

export default class Main {
    clickHandler: OnClickHandler;
    game: Game;
    offset: Point = { x: 0, y: 0 };

    constructor() {
        this.game = new Game();
        this.clickHandler = new OnClickHandler(this.game);
        new HoverHandler(this.game);

        new DrawMain(this.game);
    }

    onClick(state: Curserstate) {
        this.clickHandler.changeCurser(state);
    }
}