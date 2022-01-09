import { BuildingStatus, distance } from "../helper/Helper";
import Point from "../helper/Point";
import { Game } from "./Game";
import { PacketType } from "./Packet";

export default class Building {
    pos: Point;
    moveTargetPos: Point = new Point(0, 0);
    speed: Point = new Point(0, 0);
    size: number = 0;
    health: number;
    built: boolean = false;
    maxHealth: number = 0;
    energy: number;
    maxEnergy: number = 0;
    healthRequests: number = 0;
    energyRequests: number = 0;
    canMove: boolean = false;
    status: BuildingStatus = BuildingStatus.Idle;

    static baseSpeed = 0.5;

    game: Game;

    constructor(pos: Point, game: Game) {
        this.pos = pos;
        this.health = 0;
        this.energy = 0;

        this.game = game;
    }

    calSpeed() {
        if (this.moveTargetPos.x != this.pos.x || this.moveTargetPos.y != this.pos.y) {
            let delta = new Point(this.moveTargetPos.x - this.pos.x, this.moveTargetPos.y - this.pos.y);
            let dist = distance(this.moveTargetPos, this.pos);

            this.speed.x = (delta.x / dist) * Building.baseSpeed;
            this.speed.y = (delta.y / dist) * Building.baseSpeed;

            if (Math.abs(this.speed.x) > Math.abs(delta.x))
                this.speed.x = delta.x;
            if (Math.abs(this.speed.y) > Math.abs(delta.y))
                this.speed.y = delta.y;
        }
    }

    move() {
        if (!this.canMove || this.status != BuildingStatus.Moving) {
            return;
        }
        this.calSpeed();

        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;

        if (this.pos.x < this.moveTargetPos.x + 1 && this.pos.x > this.moveTargetPos.x - 1 &&
            this.pos.y < this.moveTargetPos.y + 1 && this.pos.y > this.moveTargetPos.y - 1) {
                this.pos.x = this.moveTargetPos.x;
                this.pos.y = this.moveTargetPos.y;
                this.status = BuildingStatus.Idle;
            }
    }

    getCenter = () => {
        return new Point(this.pos.x + (this.size / 2), this.pos.y + (this.size / 2));
    }

    requestPacket = () => {
        let healthDelta = this.maxHealth - this.health - this.healthRequests;
        if (healthDelta > 0) {
            this.game.queuePacket(this, PacketType.Health);
        }
        if (this.built) {
            let energyDelta = this.maxEnergy - this.energy - this.energyRequests;
            if (energyDelta > 0) {
                this.game.queuePacket(this, PacketType.Energy);
            }
        }
    }

    takeDamage = () => {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.game.world.tiles[this.pos.x + i][this.pos.y + j].creep > 0) {
                    this.health -= this.game.world.tiles[this.pos.x + i][this.pos.y + j].creep / 10;
                }
            }
        }

        if (this.health < 0) {
            this.game.removeBuilding(this);
        }
    }
}
