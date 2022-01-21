import { Game } from "../chars/Game";
import Point from "../helper/Point";

export default class HoverHandler {
    game: Game;

    constructor(game: Game) {
        this.game = game;

        document.getElementById("canvas")?.addEventListener("mousemove", this.hover)
    }

    hover = (e: MouseEvent) => {
        let canvas = document.getElementById("canvas");

        let tileWidth = canvas!.clientWidth / this.game.world.dimensions.x;
        let tileHeight = canvas!.clientHeight / this.game.world.dimensions.y;

        let x = Math.floor((e.clientX - canvas!.offsetLeft) / tileWidth);
        let y = Math.floor((e.clientY - canvas!.offsetTop) / tileHeight);

        this.updateProgressbar(new Point(x, y));
    }

    updateProgressbar = (pos: Point) => {
        let ele = document.getElementById("elevation-terrain-progress");
        let terrainHeight = this.game.world.tiles[pos.x][pos.y].height;
        ele!.style.width = (100 / 6 * terrainHeight).toString() + "%";

        ele = document.getElementById("elevation-creeper-progress");
        let creeper = this.game.world.tiles[pos.x][pos.y].creep;
        console.log(creeper);
        ele!.style.width = (100 / 6 * creeper).toString() + "%";
    }
}