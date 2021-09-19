import { GameMap } from "../game/GameMap";
import { Curserstate, OnClickHandler } from "./OnClickHandler";

export function main() {
    // create gui
    new GameMap();
}

// export default class Main {
//     clickHandler: OnClickHandler;

//     constructor() {
//         this.clickHandler = new OnClickHandler();
//         let game = new GameMap();
//     }

//     onClick(state: Curserstate) {
//         this.clickHandler.changeCurser(state);
//     }
// }