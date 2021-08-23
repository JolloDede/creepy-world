import { Structure } from "../chars/structure";

export class CanvasClickManager {
    private elementDraging: boolean;

    constructor() {
        this.elementDraging = false;
    }

    public onClick() {
        // get position in the universe and return if somethng is there and do it on the hand
        if (this.elementDraging /* && get pos on universe empty */ || !this.elementDraging /* && get pos on universe not empty */) {

        }else {
            console.log("There is nothing todo here");
        }
    }
}