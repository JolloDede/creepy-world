
export class OnClickHandler {
    curserState: Curserstate;

    constructor() {
        this.curserState = Curserstate.Null;
    }

    canvasClick() {
        switch (this.curserState) {
            case Curserstate.Null:
                // here things that are on the canvas get handeld
                console.log("Nothing todo here. Not yet implemented");
                break;

            case Curserstate.Collector:
                console.log("Try to place a Collector");
                break;

            case Curserstate.Blaster:
                console.log("Try to place a Blaster");
                break;

            default:
                break;
        }
    }

    changeCurser(newCurser: Curserstate) {
        console.log("You are holding a " + Curserstate[newCurser]);
        this.curserState = newCurser;
    }
}

export enum Curserstate {
    Null,
    Collector,
    Blaster,
}