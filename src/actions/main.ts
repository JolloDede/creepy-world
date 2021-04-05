import { Drawing } from "../draw/drawMain";
import { App } from "../gui/gui";
import { Game } from "../chars/game";

export function main() {
    let canvas = document.querySelector("canvas") as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = (window.innerHeight * 0.9);
    let game = new Game();
    let drawEle = new Drawing(canvas);

    App();
    console.time("draw");
    drawEle.draw(game);
    console.timeEnd("draw");
}


