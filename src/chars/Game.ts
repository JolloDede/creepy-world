import { Emitter } from "./Emitter";
import Player from "./Player";
import World from "../helper/World";
import CreeperUpdate from "../clocks/UpdateCreeper";
import Building from "./Building";
import { Collector } from "./Collector";
import Point, { pointIsInRange } from "../helper/Point";
import { cloneArray, distance, EBuilding, GameState, UpdateAction } from "../helper/Helper";
import Blaster from "./Blaster";
import Projectile from "./Projectile";
import UpdateBuildigns from "../clocks/UpdateBuildings";
import UpdateProjectiles from "../clocks/UpdateProjectiles";
import Packet, { PacketType } from "./Packet";
import UpdatePackets from "../clocks/UpdatePackets";
import Route from "../helper/Route";
import UpdatepacketQueue from "../clocks/UpdatePacketQueue";
import Stabilizer from "./Stabilizer";
import { UpdateGameState } from "../clocks/UpdateGameState";

export class Game {
    gameState: GameState;
    player: Player;
    buildings: Building[] = [];
    emitters: Emitter[] = [];
    world: World;
    projectiles: Projectile[] = [];
    packets = new Set<Packet>();
    packetQueue: Packet[] = [];
    stabilizer: Stabilizer[] = [];

    constructor() {
        this.player = new Player(40, 36, this);
        this.world = new World({ x: 70, y: 48 });
        this.world.createWorld();
        // Emitters
        this.emitters.push(new Emitter(new Point(0, 0), this));
        this.emitters.push(new Emitter(new Point(17, 0), this));
        this.emitters.push(new Emitter(new Point(35, 0), this));
        this.emitters.push(new Emitter(new Point(69, 0), this));
        // Buildings
        this.buildings.push(this.player);
        // Collector is already built
        this.addBuilding(new Point(42, 29), EBuilding.Collector);
        this.buildings[1].built = true;
        this.buildings[1].health = this.buildings[1].maxHealth;
        this.addBuilding(new Point(9, 5), EBuilding.Stabilizer);
        this.addBuilding(new Point(37, 4), EBuilding.Stabilizer);
        this.addBuilding(new Point(59, 17), EBuilding.Stabilizer);

        this.gameState = GameState.InGame;

        // clocks
        new UpdateGameState(this);
        new CreeperUpdate(this);
        new UpdateBuildigns(this);
        new UpdateProjectiles(this);
        new UpdatepacketQueue(this);
        new UpdatePackets(this);
    }

    addBuilding(pos: Point, type: EBuilding) {
        let build: Building | null = null;
        // buildings can be built
        if (!this.buildingCanBePlaced(pos)) {
            console.log("building cant be placed");
            return;
        }
        switch (type) {
            case EBuilding.Collector:
                build = new Collector(pos, this);
                break;

            case EBuilding.Blaster:
                build = new Blaster(pos, this);
                break;

            case EBuilding.Stabilizer:
                build = new Stabilizer(pos, this);
                break;

            default:
                break;
        }
        if (build === null) return;
        this.buildings.push(build);
        this.updateConnections();
        console.log("new building has been placed at: " + pos.x + " " + pos.y);
    }

    removeBuilding = (building: Building) => {
        this.buildings = this.buildings.filter(build => build !== building);
        this.updateConnections();
        if (building instanceof Collector) {
            if (building.built) {
                this.updateCollectionFields(building, UpdateAction.Remove);
            }
        }

        this.packets.forEach(packet => {
            if (packet.target === building) {
                this.packets.delete(packet);
            }
        });
        this.packetQueue = this.packetQueue.filter(packet => packet.target !== building);
    }

    getNeighbourBuildings(node: Building, target?: Building): Building[] {
        let neighbours: Building[] = [];
        for (let i = 0; i < this.buildings.length; i++) {
            if (!(node.pos.x === this.buildings[i].pos.x && node.pos.y === this.buildings[i].pos.y)) {
                // it must either be the target or be built or target undefined
                if (this.buildings[i] === target || this.buildings[i].built || target === undefined) {
                    let buildingCenter = this.buildings[i].getCenter();
                    let nodeCenter = node.getCenter();
                    let dist = distance(nodeCenter, buildingCenter);
                    const maxDistance = 5;
                    if (dist <= maxDistance) {
                        neighbours.push(this.buildings[i]);
                        // todo remove
                        // this.connections.add(new Connection(nodeCenter, buildingCenter));
                    }
                }
            }
        }
        return neighbours;
    }

    updateConnections() {
        let neighbours: Building[] = [];
        // todo remove
        // this.connections.clear();
        this.getAllConnections(this.player, neighbours);

        // set the connected buildings to connected
        for (let i = 0; i < neighbours.length; i++) {
            const building = neighbours[i];
            building.connected = true;
            if (building instanceof Collector && building.built) {
                this.updateCollectionFields(building, UpdateAction.Add);
            }
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

    // a A* algorythm for finding shortest path
    findRoute = (packet: Packet) => {
        let routes: Route[] = [];

        let route = new Route();
        route.nodes.push(packet.currentTarget!);
        routes.push(route);

        while (routes.length > 0) {
            if (routes[0].nodes[routes[0].nodes.length - 1] === packet.target) {
                break;
            }

            let oldRoute = routes.shift();

            let lastNode = oldRoute?.nodes[oldRoute.nodes.length - 1];
            let neighbours = this.getNeighbourBuildings(lastNode!, packet.target);

            for (let i = 0; i < neighbours.length; i++) {
                if (!this.inRoute(neighbours[i], oldRoute?.nodes!)) {
                    let newRoute = new Route();

                    newRoute.nodes = cloneArray(oldRoute?.nodes);

                    newRoute.nodes.push(neighbours[i]);

                    newRoute.distanceTravelled = oldRoute?.distanceTravelled!;

                    // get the new distance travelled
                    let centerA = newRoute.nodes[newRoute.nodes.length - 1].getCenter();
                    let centerB = newRoute.nodes[newRoute.nodes.length - 2].getCenter();
                    newRoute.distanceTravelled += distance(centerA, centerB);

                    // get remianing distance
                    let centerC = packet.target.getCenter();
                    newRoute.distanceRemaining = distance(centerC, centerA);
                    routes.push(newRoute);
                }
            }

            // find routes that end at the same node, remove those with the longer distance travelled
            for (let i = 0; i < routes.length; i++) {
                for (let j = 0; j < routes.length; j++) {
                    if (i !== j) {
                        if (routes[i].nodes[routes[i].nodes.length - 1] === routes[j].nodes[routes[j].nodes.length - 1]) {
                            if (routes[i].distanceTravelled < routes[j].distanceTravelled) {
                                routes[j].remove = true;
                            } else if (routes[i].distanceTravelled > routes[j].distanceTravelled) {
                                routes[i].remove = true;
                            }
                        }
                    }
                }
            }

            // remove the routes
            for (let i = 0; i < routes.length; i++) {
                if (routes[i].remove) {
                    routes.splice(i, 1);
                }
            }

            routes.sort((a, b) => (
                (a.distanceTravelled + a.distanceRemaining) - (b.distanceTravelled + b.distanceRemaining)
            ));
        }

        // if a route is left set the second element as the next node for the packet
        if (routes.length > 0) {
            packet.currentTarget = routes[0].nodes[1];
        } else {
            packet.currentTarget = null;
            if (packet.type === PacketType.Energy) {
                packet.target.energyRequests--;
                if (packet.target.energyRequests < 0) packet.target.energyRequests = 0;
            } else if (packet.type === PacketType.Health) {
                packet.target.healthRequests--;
                if (packet.target.healthRequests < 0) packet.target.healthRequests = 0;
            }
            packet.remove = true;
        }
    }

    inRoute = (neighbour: Building, nodes: Building[]): boolean => {
        let found = false;
        for (let i = 0; i < nodes.length; i++) {
            if (neighbour.pos.x === nodes[i].pos.x && neighbour.pos.y === nodes[i].pos.y) {
                found = true;
                break;
            }
        }
        return found;
    }

    updateCollectionFields(node: Building, action: UpdateAction) {
        let height = this.world.tiles[node.pos.x][node.pos.y].height;
        for (let i = -2; i < 3; i++) {
            for (let j = -2; j < 3; j++) {
                const currentPos = new Point(node.pos.x + i, node.pos.y + j);
                if (this.world.withinWorld(currentPos.x, currentPos.y)) {
                    const currentHeight = this.world.tiles[currentPos.x][currentPos.y].height;
                    // within range
                    if (height === currentHeight) {
                        if (action === UpdateAction.Add) {
                            this.world.tiles[currentPos.x][currentPos.y].collector = node as Collector;
                        } else {
                            this.world.tiles[currentPos.x][currentPos.y].collector = null;
                        }
                    }

                    // fixing 
                    for (let i = 0; i < this.buildings.length; i++) {
                        const building = this.buildings[i];
                        if (building instanceof Collector) {
                            let bHeight = this.world.tiles[building.pos.x][building.pos.y].height;
                            if (pointIsInRange(currentPos, building.pos, 6)) {
                                if (bHeight === currentHeight) {
                                    this.world.tiles[currentPos.x][currentPos.y].collector = building;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    queuePacket(target: Building, type: PacketType) {
        let packet = new Packet(this.player.getCenter(), target, type, this);
        packet.currentTarget = this.player;
        this.findRoute(packet);
        if (packet.currentTarget !== null) {
            if (type === PacketType.Health) target.healthRequests++;
            if (type === PacketType.Energy) target.energyRequests += 4;
            this.packetQueue.push(packet);
        }
    }

    buildingCanBePlaced(pos: Point): boolean {
        for (let i = 0; i < this.buildings.length; i++) {
            const building = this.buildings[i];
            if (pos.x >= building.pos.x && pos.y >= building.pos.y) {
                if (pos.x < building.pos.x + building.size && pos.y < building.pos.y + building.size) {
                    return false;
                }
            }
        }
        return true;
    }

    getBuildingAt = (pos: Point) => {
        for (let i = 0; i < this.buildings.length; i++) {
            const building = this.buildings[i];
            if (pos.x >= building.pos.x && pos.y >= building.pos.y && pos.x < building.pos.x+building.size && pos.y < building.pos.y+building.size) {
                return building;
            }
        }
    }
}
