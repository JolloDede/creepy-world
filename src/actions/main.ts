import { Drawing } from "../draw/drawMain";
import { App } from "../gui/gui";
import { Game } from "../chars/game";
import { DragManager } from "../manager/dragManager";

export function main() {
    let canvas = document.querySelector("canvas") as HTMLCanvasElement;
    canvas.addEventListener("click", canvasClickHandle);
    canvas.width = window.innerWidth;
    canvas.height = (window.innerHeight * 0.9);
    let game = new Game();
    let drawEle = new Drawing(canvas);

    // hang in the drag manager
    // drag manager save whats in his hand if onclick look whats in his hand and try to place it
    // onclick to the canvas
    let dragManager = new DragManager();
    App();
    console.time("draw");
    drawEle.draw(game);
    console.timeEnd("draw");
}

function canvasClickHandle(e: MouseEvent) {
    
}
