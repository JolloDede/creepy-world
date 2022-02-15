import { distance, UpdateAction } from "../helper/Helper";
import Point from "../helper/Point";
import Building from "./Building";
import { Collector } from "./Collector";
import { Game } from "./Game";


export enum PacketType {
    Health,
    Energy
}

export default class Packet {
    pos: Point;
    speed: Point =  new Point(0, 0);
    type: PacketType;
    target: Building;
    // currentTarget should not be null when moved
    currentTarget: Building | null = null;
    remove: boolean = false;
    static baseSpeed = 0.2;

    game: Game;

    constructor(pos: Point, target: Building, type: PacketType, game: Game) {
        this.pos = pos;
        this.target = target;
        this.type = type;
        
        this.game = game;
    }

    calSpeed = () => {
        let currentTargetCenter = this.currentTarget?.getCenter()!;
        let delta = new Point(currentTargetCenter.x - this.pos.x, currentTargetCenter.y - this.pos.y);
        let dist = distance(this.pos, currentTargetCenter);

        this.speed.x = (delta.x / dist) * Packet.baseSpeed;
        this.speed.y = (delta.y / dist) * Packet.baseSpeed;

        if (Math.abs(this.speed.x) > Math.abs(delta.x))
            this.speed.x = delta.x;
        if (Math.abs(this.speed.y) > Math.abs(delta.y))
            this.speed.y = delta.y;
    }

    move = () => {
        this.calSpeed();
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;

        let currentCenterTarget = this.currentTarget!.getCenter();
        if (this.pos.x < currentCenterTarget.x + 0.1 && this.pos.x > currentCenterTarget.x - 0.1 && this.pos.y < currentCenterTarget.y + 0.1 && this.pos.y > currentCenterTarget.y - 0.1) {
            this.pos.x = currentCenterTarget.x;
            this.pos.y = currentCenterTarget.y;
            // if the target is reached
            if (this.currentTarget === this.target) {
                this.remove = true;
                // update the target building
                if (this.type === PacketType.Health) {
                    this.target.health++;
                    this.target.healthRequests--;
                    if (this.target.health >= this.target.maxHealth) {
                        this.target.health = this.target.maxHealth;
                        if (!this.target.built) {
                            this.target.built = true;
                            if (this.target instanceof Collector) {
                                this.target.connected = true;
                                this.game.updateCollectionFields(this.target, UpdateAction.Add);
                            }
                        }
                    }
                }else if (this.type === PacketType.Energy) {
                    this.target.energy += 4;
                    this.target.energyRequests -= 4;
                    if (this.target.energy > this.target.maxEnergy)
                        this.target.energy = this.target.maxEnergy;
                }
            }else {
                this.game.findRoute(this);
            }
        }
    }
}
