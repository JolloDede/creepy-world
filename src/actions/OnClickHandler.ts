
export class OnClickHandler {
    curserState: Curserstate;

    constructor() {
        this.curserState = Curserstate.Null;
    }

    changeCurser(newCurser: Curserstate) {
        console.log("You are holding a "+Curserstate[newCurser]);
        this.curserState = newCurser;
    }
}

export enum Curserstate {
    Null,
    Collector
}