import { Emitter } from "./Emitter";
import Player from "./Player";
import World from "../helper/World";
import CreeperUpdate from "../clocks/CreeperUpdate";
import Building, { EBuilding } from "./Building";
import { Collector } from "./Collector";
import Point, { pointIsInRange } from "../helper/Point";
import { distance } from "../helper/Helper";
import { Connection, Connections } from "../helper/Connection";
import Blaster from "./Blaster";
import Projectile from "./Projectile";
import UpdateBuildigns from "../clocks/UpdateBuildings";
import UpdateProjectiles from "../clocks/UpdateProjectiles";

export class Game {
    gameState: GameState;
    player: Player;
    buildings: Building[] = [];
    emitters: Emitter[] = [];
    world: World;
    connections: Connections = new Connections();
    projectiles: Projectile[] = [];

    constructor() {
        this.player = new Player(40, 36, this);
        this.world = new World({ x: 70, y: 48 });
        this.world.createWorld();
        this.emitters.push(new Emitter(new Point(0, 0), this));
        this.emitters.push(new Emitter(new Point(17, 0), this));
        this.emitters.push(new Emitter(new Point(35, 0), this));
        this.emitters.push(new Emitter(new Point(69, 0), this));
        this.buildings.push(this.player);
        this.addBuilding(new Point(42, 29), EBuilding.Collector);
        this.gameState = GameState.InGame;

        // clocks
        new CreeperUpdate(this);
        new UpdateBuildigns(this);
        new UpdateProjectiles(this);
    }

    addBuilding(pos: Point, type: EBuilding) {
        let build: Building | null = null;
        switch (type) {
            case EBuilding.Collector:
                build = new Collector(pos, this);
                // this.updateCollectionFields(build, UpdateAction.Add);
                break;

            // todo
            case EBuilding.Blaster:
                build = new Blaster(pos, this);
                break;

            default:
                break;
        }
        if (build == null) return;
        this.buildings.push(build);
        this.updateConnections();
        // todo only update when collector is placed
        if (build instanceof Collector) {
            this.updateCollectionFields(build, UpdateAction.Add);
        }
    }

    // todo test this function
    getNeighbourBuildings(node: Building, target?: Building): Building[] {
        let neighbours: Building[] = [];
        for (let i = 0; i < this.buildings.length; i++) {
            if (!(node.pos.x == this.buildings[i].pos.x && node.pos.y == this.buildings[i].pos.y)) {
                if (this.buildings[i] == target || this.buildings[i].built) {
                    let buildingCenter = this.buildings[i].getCenter();
                    let nodeCenter = node.getCenter();
                    let dist = distance(nodeCenter, buildingCenter);
                    const maxDistance = 5;
                    if (dist <= maxDistance) {
                        neighbours.push(this.buildings[i]);
                        this.connections.add(new Connection(nodeCenter, buildingCenter));
                    }
                }
            }
        }
        return neighbours;
    }

    updateConnections() {
        let neighbours: Building[] = [];
        this.getAllConnections(this.player, neighbours);

        // set the connected buildings to connected
        for (let i = 0; i < neighbours.length; i++) {
            const building = neighbours[i];
            building.connected = true;
        }
    }

    getAllConnections(node: Building, neighbours: Building[]) {
        let nodeNeighbours = this.getNeighbourBuildings(node);
        for (let i = 0; i < nodeNeighbours.length; i++) {
            if (!neighbours.includes(nodeNeighbours[i])) {
                neighbours.push(nodeNeighbours[i]);
                this.getAllConnections(nodeNeighbours[i], neighbours);
            }
        }
    }

    updateCollectionFields(node: Building, action: UpdateAction) {
        let height = this.world.tiles[node.pos.x][node.pos.y].height;
        for (let i = -2; i < 3; i++) {
            for (let j = -2; j < 3; j++) {
                const currentPos = new Point(node.pos.x + i, node.pos.y + j);
                const currentHeight = this.world.tiles[currentPos.x][currentPos.y].height;
                if (this.world.withinWorld(currentPos.x, currentPos.y)) {
                    // within range
                    if (height == currentHeight) {
                        if (action == UpdateAction.Add) {
                            this.world.tiles[currentPos.x][currentPos.y].collector = node as Collector;
                        } else {
                            this.world.tiles[currentPos.x][currentPos.y].collector = null;
                        }
                    }
                }

                // fixing 
                for (let i = 0; i < this.buildings.length; i++) {
                    const building = this.buildings[i];
                    if (building instanceof Collector) {
                        let bHeight = this.world.tiles[building.pos.x][building.pos.y].height;
                        if (pointIsInRange(currentPos, building.pos, 6)) {
                            if (bHeight == currentHeight) {
                                this.world.tiles[currentPos.x][currentPos.y].collector = building;
                            }
                        }
                    }
                }
            }
        }
    }

    isPointEqual = (pointA: Point, pointB: Point) => {
        if (pointA.x == pointB.x && pointA.y == pointB.y) return true;
        return false;
    }
}

export enum GameState {
    InGame,
}

export enum UpdateAction {
    Add,
    Remove
}