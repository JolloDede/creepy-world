import Building from "../chars/Building";

export default class Route {
    nodes: Building[] = [];
    remove: boolean = false;
    distanceTravelled: number = 0;
    distanceRemaining: number = 0;
}