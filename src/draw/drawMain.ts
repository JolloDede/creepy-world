import { Game } from "../chars/game";

export class Drawing {
    private crc: CanvasRenderingContext2D;
    private width: number;
    private height: number;

    constructor(canvas: HTMLCanvasElement) {
        this.crc = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.width = canvas.width;
        this.height = canvas.height;
    }

    /**
     * name
     */
    public draw(game: Game) {
        let cellHeight = this.height / game.getUniverse().getHeight();
        let cellWidth = this.width / game.getUniverse().getWidth();

        // paint map
        for (let i = 0; i < game.getUniverse().getHeight(); i++) {
            for (let ii = 0; ii < game.getUniverse().getWidth(); ii++) {
                // Graustufen zeichnen
                switch (game.getUniverse().getMap()[i][ii]) {
                    case 0:
                        this.crc.fillStyle = "#706660";
                        break;

                    case 1:
                        this.crc.fillStyle = "#6c616e";
                        break;

                    case 2:
                        this.crc.fillStyle = "#858178";
                        break;

                    case 3:
                        this.crc.fillStyle = "#95877f";
                        break;

                    case 4:
                        this.crc.fillStyle = "#c1c0ba";
                        break;

                    case 5:
                        this.crc.fillStyle = "#edcac7";
                        break;

                    default:
                        break;
                }
                this.crc.fillRect(cellWidth * ii, cellHeight * i, cellWidth, cellHeight);
            }
        }

        // draw Player
        this.crc.strokeStyle = "red";
        this.crc.rect(game.getPlayer().getPos().x, game.getPlayer().getPos().y, cellWidth*8, cellHeight*8);
        this.crc.stroke();

        // game..forEach(element => {
            
        // });
    }
}