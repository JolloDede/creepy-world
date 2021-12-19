/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/Blaster.png":
/*!*****************************!*\
  !*** ./src/img/Blaster.png ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Blaster.png");

/***/ }),

/***/ "./src/img/Collector.png":
/*!*******************************!*\
  !*** ./src/img/Collector.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Collector.png");

/***/ }),

/***/ "./src/img/Creeper.png":
/*!*****************************!*\
  !*** ./src/img/Creeper.png ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Creeper.png");

/***/ }),

/***/ "./src/img/Emitter.png":
/*!*****************************!*\
  !*** ./src/img/Emitter.png ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Emitter.png");

/***/ }),

/***/ "./src/img/Player.png":
/*!****************************!*\
  !*** ./src/img/Player.png ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Player.png");

/***/ }),

/***/ "./src/img/Stabilizer.png":
/*!********************************!*\
  !*** ./src/img/Stabilizer.png ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Stabilizer.png");

/***/ }),

/***/ "./src/actions/OnClickHandler.ts":
/*!***************************************!*\
  !*** ./src/actions/OnClickHandler.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Curserstate": function() { return /* binding */ Curserstate; },
/* harmony export */   "OnClickHandler": function() { return /* binding */ OnClickHandler; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");


var Curserstate;
(function (Curserstate) {
    Curserstate[Curserstate["Null"] = 0] = "Null";
    Curserstate[Curserstate["Collector"] = 1] = "Collector";
    Curserstate[Curserstate["Blaster"] = 2] = "Blaster";
})(Curserstate || (Curserstate = {}));
class OnClickHandler {
    constructor(game) {
        var _a, _b, _c;
        this.click = (e) => {
            // todo maybe not calculating right
            let canvas = document.getElementById("canvas");
            let tileWidth = canvas.clientWidth / this.game.world.dimensions.x;
            let tileHeight = canvas.clientHeight / this.game.world.dimensions.y;
            let x = Math.floor((e.clientX - canvas.offsetLeft) / tileWidth);
            let y = Math.floor((e.clientY - canvas.offsetTop) / tileHeight);
            this.canvasClick(x, y);
        };
        this.handleCollectorClick = () => {
            this.changeCurser(Curserstate.Collector);
        };
        this.handleBlasterClick = () => {
            this.changeCurser(Curserstate.Collector);
        };
        this.curserState = Curserstate.Null;
        this.game = game;
        (_a = document.getElementById("canvas")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.click);
        (_b = document.getElementById("collector")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.handleCollectorClick);
        (_c = document.getElementById("blaster")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", this.handleBlasterClick);
    }
    canvasClick(x, y) {
        switch (this.curserState) {
            case Curserstate.Null:
                // here things that are on the canvas get handeld
                console.log("Nothing todo here. Not yet implemented");
                break;
            case Curserstate.Collector:
                console.log("Try to place a Collector at " + x + " " + y);
                this.game.addBuilding(new _helper_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y), _helper_Helper__WEBPACK_IMPORTED_MODULE_0__.EBuilding.Collector);
                break;
            case Curserstate.Blaster:
                console.log("Try to place a Blaster");
                this.game.addBuilding(new _helper_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y), _helper_Helper__WEBPACK_IMPORTED_MODULE_0__.EBuilding.Blaster);
                break;
            default:
                break;
        }
        this.curserState = Curserstate.Null;
    }
    changeCurser(newCurser) {
        console.log("You are holding a " + Curserstate[newCurser]);
        this.curserState = newCurser;
    }
}


/***/ }),

/***/ "./src/actions/main.ts":
/*!*****************************!*\
  !*** ./src/actions/main.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var _draw_DrawMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../draw/DrawMain */ "./src/draw/DrawMain.ts");
/* harmony import */ var _OnClickHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnClickHandler */ "./src/actions/OnClickHandler.ts");
/* harmony import */ var _chars_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chars/Game */ "./src/chars/Game.ts");



class Main {
    constructor() {
        this.offset = { x: 0, y: 0 };
        this.run = () => {
            requestAnimationFrame(this.run);
            this.render();
        };
        this.game = new _chars_Game__WEBPACK_IMPORTED_MODULE_2__.Game();
        this.clickHandler = new _OnClickHandler__WEBPACK_IMPORTED_MODULE_1__.OnClickHandler(this.game);
        this.draw = new _draw_DrawMain__WEBPACK_IMPORTED_MODULE_0__["default"](this.game);
    }
    render() {
        this.draw.render();
    }
    setCanvasDim(width, height) {
        this.draw.setWidthHeight(width, height);
    }
    setCanvasOffset(x, y) {
        this.offset = { x, y };
    }
    onClick(state) {
        this.clickHandler.changeCurser(state);
    }
}


/***/ }),

/***/ "./src/chars/Blaster.ts":
/*!******************************!*\
  !*** ./src/chars/Blaster.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Blaster; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Building */ "./src/chars/Building.ts");
/* harmony import */ var _Projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projectile */ "./src/chars/Projectile.ts");




class Blaster extends _Building__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(pos, game) {
        super(pos, game);
        this.update = () => {
            if (this.energy > 0) {
                let targets = [];
                for (let r = 0; r < this.weaponRadius; r++) {
                    for (let i = this.pos.x - r; i <= this.pos.x + r; i++) {
                        for (let j = this.pos.y - r; j <= this.pos.y + r; j++) {
                            if (this.game.world.withinWorld(i, j)) {
                                if (this.game.world.tiles[i][j].creep > 0) {
                                    targets.push(new _helper_Point__WEBPACK_IMPORTED_MODULE_1__["default"](i, j));
                                }
                            }
                        }
                    }
                    // shoot the ones that are further away
                    if (targets.length > 0)
                        break;
                }
                // select random target
                if (targets.length > 0) {
                    let target = (0,_helper_Helper__WEBPACK_IMPORTED_MODULE_0__.getRandomEntry)(targets);
                    let dx = target.x - this.getCenter().x;
                    let dy = target.y - this.getCenter().y;
                    let targetAngle = Math.atan2(dx, dy);
                    // fire
                    this.energy -= 1;
                    let projectile = new _Projectile__WEBPACK_IMPORTED_MODULE_3__["default"](this.getCenter(), target, targetAngle);
                    this.game.projectiles.push(projectile);
                }
            }
        };
        this.maxHealth = 5;
        this.size = 1;
        this.maxEnergy = 20;
        this.weaponRadius = 8;
    }
}


/***/ }),

/***/ "./src/chars/Building.ts":
/*!*******************************!*\
  !*** ./src/chars/Building.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Building; }
/* harmony export */ });
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");
/* harmony import */ var _Packet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Packet */ "./src/chars/Packet.ts");


class Building {
    constructor(pos, game) {
        this.size = 0;
        this.built = false;
        this.maxHealth = 0;
        this.maxEnergy = 0;
        this.healthRequests = 0;
        this.energyRequests = 0;
        this.connected = false;
        this.getCenter = () => {
            return new _helper_Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.pos.x + (this.size / 2), this.pos.y + (this.size / 2));
        };
        this.requestPacket = () => {
            let healthDelta = this.maxHealth - this.health - this.healthRequests;
            if (healthDelta > 0) {
                this.game.queuePacket(this, _Packet__WEBPACK_IMPORTED_MODULE_1__.PacketType.Health);
            }
            if (this.built) {
                let energyDelta = this.maxEnergy - this.energy - this.energyRequests;
                if (energyDelta > 0) {
                    this.game.queuePacket(this, _Packet__WEBPACK_IMPORTED_MODULE_1__.PacketType.Energy);
                }
            }
        };
        this.takeDamage = () => {
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
        };
        this.pos = pos;
        this.health = 0;
        this.energy = 0;
        this.game = game;
    }
}


/***/ }),

/***/ "./src/chars/Collector.ts":
/*!********************************!*\
  !*** ./src/chars/Collector.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collector": function() { return /* binding */ Collector; }
/* harmony export */ });
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Building */ "./src/chars/Building.ts");


class Collector extends _Building__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(pos, game) {
        super(pos, game);
        this.collectedEnergy = 0;
        this.maxHealth = 5;
        this.size = 1;
    }
    collectEnergy() {
        if (this.built && this.connected) {
            let height = this.game.world.tiles[this.pos.x][this.pos.y].height;
            for (let i = -2; i < 3; i++) {
                for (let j = -2; j < 3; j++) {
                    let currentPos = new _helper_Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.pos.x + i, this.pos.y + j);
                    if (this.game.world.withinWorld(currentPos.x, currentPos.y)) {
                        let tileHeight = this.game.world.tiles[currentPos.x][currentPos.y].height;
                        if ((0,_helper_Point__WEBPACK_IMPORTED_MODULE_0__.pointIsInRange)(new _helper_Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.pos.x, this.pos.y), new _helper_Point__WEBPACK_IMPORTED_MODULE_0__["default"](currentPos.x, currentPos.y), 3)) {
                            if (tileHeight === height) {
                                if (this.game.world.tiles[currentPos.x][currentPos.y].collector === this) {
                                    this.collectedEnergy += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.collectedEnergy >= 100) {
            let newEnergy = this.game.player.energy + 1;
            this.collectedEnergy -= 100;
            if (newEnergy > this.game.player.maxEnergy)
                newEnergy = this.game.player.maxEnergy;
            this.game.player.energy = newEnergy;
        }
    }
}


/***/ }),

/***/ "./src/chars/Emitter.ts":
/*!******************************!*\
  !*** ./src/chars/Emitter.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emitter": function() { return /* binding */ Emitter; }
/* harmony export */ });
class Emitter {
    constructor(pos, game) {
        this.spawnCreeper = () => {
            this.game.world.tiles[this.pos.x][this.pos.y].creep += this.strength;
        };
        this.game = game;
        this.pos = pos;
        this.strength = 25;
    }
}


/***/ }),

/***/ "./src/chars/Game.ts":
/*!***************************!*\
  !*** ./src/chars/Game.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": function() { return /* binding */ Game; }
/* harmony export */ });
/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emitter */ "./src/chars/Emitter.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/chars/Player.ts");
/* harmony import */ var _helper_World__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/World */ "./src/helper/World.ts");
/* harmony import */ var _clocks_UpdateCreeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clocks/UpdateCreeper */ "./src/clocks/UpdateCreeper.ts");
/* harmony import */ var _Collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Collector */ "./src/chars/Collector.ts");
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");
/* harmony import */ var _helper_Connection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/Connection */ "./src/helper/Connection.ts");
/* harmony import */ var _Blaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Blaster */ "./src/chars/Blaster.ts");
/* harmony import */ var _clocks_UpdateBuildings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../clocks/UpdateBuildings */ "./src/clocks/UpdateBuildings.ts");
/* harmony import */ var _clocks_UpdateProjectiles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../clocks/UpdateProjectiles */ "./src/clocks/UpdateProjectiles.ts");
/* harmony import */ var _Packet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Packet */ "./src/chars/Packet.ts");
/* harmony import */ var _clocks_UpdatePackets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../clocks/UpdatePackets */ "./src/clocks/UpdatePackets.ts");
/* harmony import */ var _helper_Route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helper/Route */ "./src/helper/Route.ts");
/* harmony import */ var _clocks_UpdatePacketQueue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../clocks/UpdatePacketQueue */ "./src/clocks/UpdatePacketQueue.ts");
/* harmony import */ var _Stabilizer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Stabilizer */ "./src/chars/Stabilizer.ts");
/* harmony import */ var _clocks_UpdateGameState__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../clocks/UpdateGameState */ "./src/clocks/UpdateGameState.ts");

















class Game {
    constructor() {
        this.buildings = [];
        this.emitters = [];
        this.connections = new _helper_Connection__WEBPACK_IMPORTED_MODULE_7__.Connections();
        this.projectiles = [];
        this.packets = new Set();
        this.packetQueue = [];
        this.stabilizer = [];
        this.removeBuilding = (building) => {
            this.buildings = this.buildings.filter(build => build !== building);
            this.updateConnections();
            if (building instanceof _Collector__WEBPACK_IMPORTED_MODULE_4__.Collector) {
                if (building.built) {
                    this.updateCollectionFields(building, _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.UpdateAction.Remove);
                }
            }
            this.packets.forEach(packet => {
                if (packet.target === building) {
                    this.packets.delete(packet);
                }
            });
            this.packetQueue = this.packetQueue.filter(packet => packet.target !== building);
        };
        // a A* algorythm for finding shortest path
        this.findRoute = (packet) => {
            let routes = [];
            let route = new _helper_Route__WEBPACK_IMPORTED_MODULE_13__["default"]();
            route.nodes.push(packet.currentTarget);
            routes.push(route);
            while (routes.length > 0) {
                if (routes[0].nodes[routes[0].nodes.length - 1] === packet.target) {
                    break;
                }
                let oldRoute = routes.shift();
                let lastNode = oldRoute === null || oldRoute === void 0 ? void 0 : oldRoute.nodes[oldRoute.nodes.length - 1];
                let neighbours = this.getNeighbourBuildings(lastNode, packet.target);
                for (let i = 0; i < neighbours.length; i++) {
                    if (!this.inRoute(neighbours[i], oldRoute === null || oldRoute === void 0 ? void 0 : oldRoute.nodes)) {
                        let newRoute = new _helper_Route__WEBPACK_IMPORTED_MODULE_13__["default"]();
                        newRoute.nodes = (0,_helper_Helper__WEBPACK_IMPORTED_MODULE_6__.cloneArray)(oldRoute === null || oldRoute === void 0 ? void 0 : oldRoute.nodes);
                        newRoute.nodes.push(neighbours[i]);
                        newRoute.distanceTravelled = oldRoute === null || oldRoute === void 0 ? void 0 : oldRoute.distanceTravelled;
                        // get the new distance travelled
                        let centerA = newRoute.nodes[newRoute.nodes.length - 1].getCenter();
                        let centerB = newRoute.nodes[newRoute.nodes.length - 2].getCenter();
                        newRoute.distanceTravelled += (0,_helper_Helper__WEBPACK_IMPORTED_MODULE_6__.distance)(centerA, centerB);
                        // get remianing distance
                        let centerC = packet.target.getCenter();
                        newRoute.distanceRemaining = (0,_helper_Helper__WEBPACK_IMPORTED_MODULE_6__.distance)(centerC, centerA);
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
                                }
                                else if (routes[i].distanceTravelled > routes[j].distanceTravelled) {
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
                routes.sort((a, b) => ((a.distanceTravelled + a.distanceRemaining) - (b.distanceTravelled + b.distanceRemaining)));
            }
            // if a route is left set the second element as the next node for the packet
            if (routes.length > 0) {
                packet.currentTarget = routes[0].nodes[1];
            }
            else {
                packet.currentTarget = null;
                if (packet.type === _Packet__WEBPACK_IMPORTED_MODULE_11__.PacketType.Energy) {
                    packet.target.energyRequests--;
                    if (packet.target.energyRequests < 0)
                        packet.target.energyRequests = 0;
                }
                else if (packet.type === _Packet__WEBPACK_IMPORTED_MODULE_11__.PacketType.Health) {
                    packet.target.healthRequests--;
                    if (packet.target.healthRequests < 0)
                        packet.target.healthRequests = 0;
                }
                packet.remove = true;
            }
        };
        this.inRoute = (neighbour, nodes) => {
            let found = false;
            for (let i = 0; i < nodes.length; i++) {
                if (neighbour.pos.x === nodes[i].pos.x && neighbour.pos.y === nodes[i].pos.y) {
                    found = true;
                    break;
                }
            }
            return found;
        };
        this.isPointEqual = (pointA, pointB) => {
            if (pointA.x === pointB.x && pointA.y === pointB.y)
                return true;
            return false;
        };
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"](40, 36, this);
        this.world = new _helper_World__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: 70, y: 48 });
        this.world.createWorld();
        // Emitters
        this.emitters.push(new _Emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0), this));
        this.emitters.push(new _Emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](17, 0), this));
        this.emitters.push(new _Emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](35, 0), this));
        this.emitters.push(new _Emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](69, 0), this));
        // Buildings
        this.buildings.push(this.player);
        // Collector is already built
        this.addBuilding(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](42, 29), _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.EBuilding.Collector);
        this.buildings[1].built = true;
        this.buildings[1].health = this.buildings[1].maxHealth;
        this.addBuilding(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](9, 5), _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.EBuilding.Stabilizer);
        this.addBuilding(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](37, 4), _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.EBuilding.Stabilizer);
        this.addBuilding(new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](59, 17), _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.EBuilding.Stabilizer);
        this.gameState = _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.GameState.InGame;
        // clocks
        new _clocks_UpdateGameState__WEBPACK_IMPORTED_MODULE_16__.UpdateGameState(this);
        new _clocks_UpdateCreeper__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        new _clocks_UpdateBuildings__WEBPACK_IMPORTED_MODULE_9__["default"](this);
        new _clocks_UpdateProjectiles__WEBPACK_IMPORTED_MODULE_10__["default"](this);
        new _clocks_UpdatePacketQueue__WEBPACK_IMPORTED_MODULE_14__["default"](this);
        new _clocks_UpdatePackets__WEBPACK_IMPORTED_MODULE_12__["default"](this);
    }
    addBuilding(pos, type) {
        let build = null;
        // buildings can be built
        if (!this.buildingCanBePlaced(pos)) {
            console.log("building cant be placed");
            return;
        }
        switch (type) {
            case _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.EBuilding.Collector:
                build = new _Collector__WEBPACK_IMPORTED_MODULE_4__.Collector(pos, this);
                break;
            case _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.EBuilding.Blaster:
                build = new _Blaster__WEBPACK_IMPORTED_MODULE_8__["default"](pos, this);
                break;
            case _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.EBuilding.Stabilizer:
                build = new _Stabilizer__WEBPACK_IMPORTED_MODULE_15__["default"](pos, this);
                break;
            default:
                break;
        }
        if (build === null)
            return;
        this.buildings.push(build);
        this.updateConnections();
        console.log("new building has been placed at: " + pos.x + " " + pos.y);
    }
    getNeighbourBuildings(node, target) {
        let neighbours = [];
        for (let i = 0; i < this.buildings.length; i++) {
            if (!(node.pos.x === this.buildings[i].pos.x && node.pos.y === this.buildings[i].pos.y)) {
                // it must either be the target or be built or target undefined
                if (this.buildings[i] === target || this.buildings[i].built || target === undefined) {
                    let buildingCenter = this.buildings[i].getCenter();
                    let nodeCenter = node.getCenter();
                    let dist = (0,_helper_Helper__WEBPACK_IMPORTED_MODULE_6__.distance)(nodeCenter, buildingCenter);
                    const maxDistance = 5;
                    if (dist <= maxDistance) {
                        neighbours.push(this.buildings[i]);
                        this.connections.add(new _helper_Connection__WEBPACK_IMPORTED_MODULE_7__.Connection(nodeCenter, buildingCenter));
                    }
                }
            }
        }
        return neighbours;
    }
    updateConnections() {
        let neighbours = [];
        this.connections.clear();
        this.getAllConnections(this.player, neighbours);
        // set the connected buildings to connected
        for (let i = 0; i < neighbours.length; i++) {
            const building = neighbours[i];
            building.connected = true;
            if (building instanceof _Collector__WEBPACK_IMPORTED_MODULE_4__.Collector && building.built) {
                this.updateCollectionFields(building, _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.UpdateAction.Add);
            }
        }
    }
    getAllConnections(node, neighbours) {
        let nodeNeighbours = this.getNeighbourBuildings(node);
        for (let i = 0; i < nodeNeighbours.length; i++) {
            if (!neighbours.includes(nodeNeighbours[i])) {
                neighbours.push(nodeNeighbours[i]);
                this.getAllConnections(nodeNeighbours[i], neighbours);
            }
        }
    }
    updateCollectionFields(node, action) {
        let height = this.world.tiles[node.pos.x][node.pos.y].height;
        for (let i = -2; i < 3; i++) {
            for (let j = -2; j < 3; j++) {
                const currentPos = new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](node.pos.x + i, node.pos.y + j);
                if (this.world.withinWorld(currentPos.x, currentPos.y)) {
                    const currentHeight = this.world.tiles[currentPos.x][currentPos.y].height;
                    // within range
                    if (height === currentHeight) {
                        if (action === _helper_Helper__WEBPACK_IMPORTED_MODULE_6__.UpdateAction.Add) {
                            this.world.tiles[currentPos.x][currentPos.y].collector = node;
                        }
                        else {
                            this.world.tiles[currentPos.x][currentPos.y].collector = null;
                        }
                    }
                    // fixing 
                    for (let i = 0; i < this.buildings.length; i++) {
                        const building = this.buildings[i];
                        if (building instanceof _Collector__WEBPACK_IMPORTED_MODULE_4__.Collector) {
                            let bHeight = this.world.tiles[building.pos.x][building.pos.y].height;
                            if ((0,_helper_Point__WEBPACK_IMPORTED_MODULE_5__.pointIsInRange)(currentPos, building.pos, 6)) {
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
    queuePacket(target, type) {
        let packet = new _Packet__WEBPACK_IMPORTED_MODULE_11__["default"](this.player.getCenter(), target, type, this);
        packet.currentTarget = this.player;
        this.findRoute(packet);
        if (packet.currentTarget !== null) {
            if (type === _Packet__WEBPACK_IMPORTED_MODULE_11__.PacketType.Health)
                target.healthRequests++;
            if (type === _Packet__WEBPACK_IMPORTED_MODULE_11__.PacketType.Energy)
                target.energyRequests++;
            this.packetQueue.push(packet);
        }
    }
    buildingCanBePlaced(pos) {
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
}


/***/ }),

/***/ "./src/chars/Packet.ts":
/*!*****************************!*\
  !*** ./src/chars/Packet.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PacketType": function() { return /* binding */ PacketType; },
/* harmony export */   "default": function() { return /* binding */ Packet; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");
/* harmony import */ var _Collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collector */ "./src/chars/Collector.ts");



var PacketType;
(function (PacketType) {
    PacketType[PacketType["Health"] = 0] = "Health";
    PacketType[PacketType["Energy"] = 1] = "Energy";
})(PacketType || (PacketType = {}));
class Packet {
    constructor(pos, target, type, game) {
        this.speed = new _helper_Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        // currentTarget should not be null when moved
        this.currentTarget = null;
        this.remove = false;
        this.calSpeed = () => {
            var _a;
            let currentTargetCenter = (_a = this.currentTarget) === null || _a === void 0 ? void 0 : _a.getCenter();
            let delta = new _helper_Point__WEBPACK_IMPORTED_MODULE_1__["default"](currentTargetCenter.x - this.pos.x, currentTargetCenter.y - this.pos.y);
            let dist = (0,_helper_Helper__WEBPACK_IMPORTED_MODULE_0__.distance)(this.pos, currentTargetCenter);
            this.speed.x = (delta.x / dist) * Packet.baseSpeed;
            this.speed.y = (delta.y / dist) * Packet.baseSpeed;
            if (Math.abs(this.speed.x) > Math.abs(delta.x))
                this.speed.x = delta.x;
            if (Math.abs(this.speed.y) > Math.abs(delta.y))
                this.speed.y = delta.y;
        };
        this.move = () => {
            this.calSpeed();
            this.pos.x += this.speed.x;
            this.pos.y += this.speed.y;
            let currentCenterTarget = this.currentTarget.getCenter();
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
                                if (this.target instanceof _Collector__WEBPACK_IMPORTED_MODULE_2__.Collector) {
                                    this.game.updateCollectionFields(this.target, _helper_Helper__WEBPACK_IMPORTED_MODULE_0__.UpdateAction.Add);
                                }
                            }
                        }
                    }
                    else if (this.type === PacketType.Energy) {
                        this.target.energy++;
                        this.target.energyRequests--;
                        if (this.target.energy > this.target.maxEnergy)
                            this.target.energy = this.target.maxEnergy;
                    }
                }
                else {
                    this.game.findRoute(this);
                }
            }
        };
        this.pos = pos;
        this.target = target;
        this.type = type;
        this.game = game;
    }
}
Packet.baseSpeed = 0.2;


/***/ }),

/***/ "./src/chars/Player.ts":
/*!*****************************!*\
  !*** ./src/chars/Player.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Player; }
/* harmony export */ });
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Building */ "./src/chars/Building.ts");


class Player extends _Building__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(x, y, game) {
        super(new _helper_Point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y), game);
        this.health = 40;
        this.maxHealth = 40;
        this.energy = 10;
        this.maxEnergy = 40;
        this.built = true;
        this.size = 5;
    }
}


/***/ }),

/***/ "./src/chars/Projectile.ts":
/*!*********************************!*\
  !*** ./src/chars/Projectile.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Projectile; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");


class Projectile {
    constructor(pos, targetPos, rotation) {
        this.speed = new _helper_Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.remove = false;
        this.pos = pos;
        this.targetPos = targetPos;
        this.rotation = rotation;
    }
    calSpeed() {
        let delta = new _helper_Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.targetPos.x - this.pos.x, this.targetPos.y - this.pos.y);
        let dist = (0,_helper_Helper__WEBPACK_IMPORTED_MODULE_0__.distance)(this.pos, this.targetPos);
        this.speed.x = (delta.x / dist) * Projectile.baseSpeed;
        this.speed.y = (delta.y / dist) * Projectile.baseSpeed;
        if (Math.abs(this.speed.x) > Math.abs(delta.x))
            this.speed.x = delta.x;
        if (Math.abs(this.speed.y) > Math.abs(delta.y))
            this.speed.y = delta.y;
    }
    move(game) {
        this.calSpeed();
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
        if (this.pos.x < this.targetPos.x + 2 && this.pos.x > this.targetPos.x - 2 && this.pos.y < this.targetPos.y + 2 && this.pos.y > this.targetPos.y - 2) {
            this.remove = true;
            game.world.tiles[this.targetPos.x][this.targetPos.y].creep -= 1;
            if (game.world.tiles[this.targetPos.x][this.targetPos.y].creep < 0) {
                game.world.tiles[this.targetPos.x][this.targetPos.y].creep = 0;
            }
        }
    }
}
Projectile.baseSpeed = 2;


/***/ }),

/***/ "./src/chars/Stabilizer.ts":
/*!*********************************!*\
  !*** ./src/chars/Stabilizer.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Stabilizer; }
/* harmony export */ });
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building */ "./src/chars/Building.ts");

class Stabilizer extends _Building__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(pos, game) {
        super(pos, game);
        this.maxHealth = 20;
        this.built = true;
        this.size = 1;
    }
}


/***/ }),

/***/ "./src/clocks/UpdateBuildings.ts":
/*!***************************************!*\
  !*** ./src/clocks/UpdateBuildings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdateBuildigns; }
/* harmony export */ });
/* harmony import */ var _chars_Blaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chars/Blaster */ "./src/chars/Blaster.ts");
/* harmony import */ var _chars_Collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chars/Collector */ "./src/chars/Collector.ts");
/* harmony import */ var _chars_Stabilizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chars/Stabilizer */ "./src/chars/Stabilizer.ts");
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");




class UpdateBuildigns {
    constructor(game) {
        this.update = () => {
            if (this.game.gameState === _helper_Helper__WEBPACK_IMPORTED_MODULE_3__.GameState.InGame) {
                this.updateBuildings();
            }
            else {
                console.log("not ingame");
            }
        };
        this.updateBuildings = () => {
            for (let i = 0; i < this.game.buildings.length; i++) {
                const building = this.game.buildings[i];
                if (building.connected && building !== this.game.player) {
                    building.requestPacket();
                }
                if (building instanceof _chars_Collector__WEBPACK_IMPORTED_MODULE_1__.Collector) {
                    building.collectEnergy();
                }
                if (building instanceof _chars_Blaster__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    building.update();
                }
                // take no damage
                if (!(building instanceof _chars_Stabilizer__WEBPACK_IMPORTED_MODULE_2__["default"])) {
                    building.takeDamage();
                }
            }
        };
        this.game = game;
        setInterval(this.update, 1000);
    }
}


/***/ }),

/***/ "./src/clocks/UpdateCreeper.ts":
/*!*************************************!*\
  !*** ./src/clocks/UpdateCreeper.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreeperUpdate; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");

class CreeperUpdate {
    constructor(game) {
        this.update = () => {
            if (this.game.gameState === _helper_Helper__WEBPACK_IMPORTED_MODULE_0__.GameState.InGame) {
                this.updateCreeper();
            }
            else {
                console.log("not ingame");
            }
        };
        this.updateCreeper = () => {
            this.emitterCounter++;
            if (this.emitterCounter >= 20) {
                this.spawnInCreeper();
                this.emitterCounter = 0;
            }
            for (let i = 0; i < this.game.world.dimensions.x; i++) {
                for (let j = 0; j < this.game.world.dimensions.y; j++) {
                    this.game.world.tiles[i][j].newcreep = this.game.world.tiles[i][j].creep;
                }
            }
            this.creeperCounter++;
            if (this.creeperCounter > 20) {
                this.creeperCounter -= 20;
                for (let i = 0; i < this.game.world.dimensions.x; i++) {
                    for (let j = 0; j < this.game.world.dimensions.y; j++) {
                        // right side neighbor
                        if (i + 1 < this.game.world.dimensions.x) {
                            this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i + 1][j]);
                        }
                        // left side neighbor
                        if (i - 1 > -1) {
                            this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i - 1][j]);
                        }
                        // top side neighbor
                        if (j + 1 < this.game.world.dimensions.y) {
                            this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i][j + 1]);
                        }
                        // botton side neighbor
                        if (j - 1 > -1) {
                            this.transferCreep(this.game.world.tiles[i][j], this.game.world.tiles[i][j - 1]);
                        }
                    }
                }
                // // put the values back to draw and fix the creep amount
                for (let i = 0; i < this.game.world.dimensions.x; i++) {
                    for (let j = 0; j < this.game.world.dimensions.y; j++) {
                        if (this.game.world.tiles[i][j].newcreep > 10) {
                            this.game.world.tiles[i][j].newcreep = 10;
                        }
                        else if (this.game.world.tiles[i][j].newcreep < 0.1) {
                            this.game.world.tiles[i][j].newcreep = 0;
                        }
                        this.game.world.tiles[i][j].creep = this.game.world.tiles[i][j].newcreep;
                    }
                }
            }
        };
        this.transferCreep = (source, target) => {
            let tranferRate = 0.2;
            if (source.height > -1 && target.height > -1) {
                if (source.creep > 0) {
                    let sourceTotal = source.height + source.creep;
                    let targetTotal = target.height + target.creep;
                    let delta = 0;
                    if (sourceTotal > targetTotal) {
                        delta = sourceTotal - targetTotal;
                        if (delta > source.creep)
                            delta = source.creep;
                        let adjustedDelta = delta * tranferRate;
                        source.newcreep -= adjustedDelta;
                        target.newcreep += adjustedDelta;
                    }
                }
            }
        };
        this.spawnInCreeper = () => {
            for (let i = 0; i < this.game.emitters.length; i++) {
                this.game.emitters[i].spawnCreeper();
            }
        };
        this.game = game;
        this.creeperCounter = 0;
        this.emitterCounter = 0;
        setInterval(this.update, 1);
    }
}


/***/ }),

/***/ "./src/clocks/UpdateGameState.ts":
/*!***************************************!*\
  !*** ./src/clocks/UpdateGameState.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateGameState": function() { return /* binding */ UpdateGameState; }
/* harmony export */ });
/* harmony import */ var _chars_Stabilizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chars/Stabilizer */ "./src/chars/Stabilizer.ts");
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");


class UpdateGameState {
    constructor(game) {
        this.update = () => {
            let gameWon = true;
            for (let i = 0; i < this.game.buildings.length; i++) {
                if (this.game.buildings[i] instanceof _chars_Stabilizer__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    if (this.game.buildings[i].health !== this.game.buildings[i].maxHealth) {
                        gameWon = false;
                    }
                }
            }
            if (gameWon) {
                this.game.gameState = _helper_Helper__WEBPACK_IMPORTED_MODULE_1__.GameState.Won;
                console.log("You have won the game");
            }
            if (this.game.player.health === 0) {
                this.game.gameState = _helper_Helper__WEBPACK_IMPORTED_MODULE_1__.GameState.Lost;
                console.log("You have lost the game");
            }
        };
        this.game = game;
        setInterval(this.update, 1);
    }
}


/***/ }),

/***/ "./src/clocks/UpdatePacketQueue.ts":
/*!*****************************************!*\
  !*** ./src/clocks/UpdatePacketQueue.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdatepacketQueue; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");

class UpdatepacketQueue {
    constructor(game) {
        this.update = () => {
            if (this.game.gameState === _helper_Helper__WEBPACK_IMPORTED_MODULE_0__.GameState.InGame) {
                this.sendPackets();
            }
            else {
                console.log("not ingame");
            }
        };
        this.sendPackets = () => {
            for (let i = 0; i < this.game.packetQueue.length; i++) {
                if (this.game.player.energy > 0) {
                    this.game.player.energy--;
                    let packet = this.game.packetQueue.shift();
                    if (packet !== undefined) {
                        this.game.packets.add(packet);
                    }
                }
            }
        };
        this.game = game;
        setInterval(this.update, 100);
    }
}


/***/ }),

/***/ "./src/clocks/UpdatePackets.ts":
/*!*************************************!*\
  !*** ./src/clocks/UpdatePackets.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdatePackets; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");

class UpdatePackets {
    constructor(game) {
        this.update = () => {
            if (this.game.gameState === _helper_Helper__WEBPACK_IMPORTED_MODULE_0__.GameState.InGame) {
                this.movePackets();
            }
            else {
                console.log("not ingame");
            }
        };
        this.movePackets = () => {
            this.game.packets.forEach(packet => {
                if (packet.remove) {
                    this.game.packets.delete(packet);
                }
                else {
                    packet.move();
                }
            });
        };
        this.game = game;
        setInterval(this.update, 200);
    }
}


/***/ }),

/***/ "./src/clocks/UpdateProjectiles.ts":
/*!*****************************************!*\
  !*** ./src/clocks/UpdateProjectiles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdateProjectiles; }
/* harmony export */ });
/* harmony import */ var _helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/Helper */ "./src/helper/Helper.ts");

class UpdateProjectiles {
    constructor(game) {
        this.update = () => {
            if (this.game.gameState === _helper_Helper__WEBPACK_IMPORTED_MODULE_0__.GameState.InGame) {
                this.moveProjectiles();
            }
            else {
                console.log("not ingame");
            }
        };
        this.moveProjectiles = () => {
            let removeId = [];
            for (let i = 0; i < this.game.projectiles.length; i++) {
                const projectile = this.game.projectiles[i];
                if (projectile.remove) {
                    removeId.push(i);
                }
                projectile.move(this.game);
            }
            // remove projectiles todo maybe doesnt work
            for (let i = 0; i < removeId.length; i++) {
                this.game.projectiles.splice(removeId[i], 1);
            }
        };
        this.game = game;
        setInterval(this.update, 100);
    }
}


/***/ }),

/***/ "./src/draw/DrawMain.ts":
/*!******************************!*\
  !*** ./src/draw/DrawMain.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DrawMain; }
/* harmony export */ });
/* harmony import */ var _chars_Collector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chars/Collector */ "./src/chars/Collector.ts");
/* harmony import */ var _chars_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chars/Player */ "./src/chars/Player.ts");
/* harmony import */ var _chars_Blaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chars/Blaster */ "./src/chars/Blaster.ts");
/* harmony import */ var _chars_Packet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chars/Packet */ "./src/chars/Packet.ts");
/* harmony import */ var _chars_Stabilizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chars/Stabilizer */ "./src/chars/Stabilizer.ts");
/* harmony import */ var _helper_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/Point */ "./src/helper/Point.ts");






const PlayerPath = __webpack_require__(/*! ../img/Player.png */ "./src/img/Player.png");
const CollectorPath = __webpack_require__(/*! ../img/Collector.png */ "./src/img/Collector.png");
const EmitterPath = __webpack_require__(/*! ../img/Emitter.png */ "./src/img/Emitter.png");
const CreeperPath = __webpack_require__(/*! ../img/Creeper.png */ "./src/img/Creeper.png");
const BlasterPath = __webpack_require__(/*! ../img/Blaster.png */ "./src/img/Blaster.png");
const StabilizerPath = __webpack_require__(/*! ../img/Stabilizer.png */ "./src/img/Stabilizer.png");
const PlayerImg = new Image();
PlayerImg.src = PlayerPath;
const CollectorImg = new Image();
CollectorImg.src = CollectorPath;
const EmitterImg = new Image();
EmitterImg.src = EmitterPath;
const CreeperImg = new Image();
CreeperImg.src = CreeperPath;
const BlasterImg = new Image();
BlasterImg.src = BlasterPath;
const StabilizerImg = new Image();
StabilizerImg.src = StabilizerPath;
const emitterSize = 1;
class DrawMain {
    constructor(game) {
        this.drawShadows = (pixelWidth, pixelHeight, pos) => {
            if (this.g === undefined)
                return;
            let height = this.game.world.tiles[pos.x][pos.y].height;
            this.g.beginPath();
            this.g.strokeStyle = "black";
            if (this.game.world.withinWorld(pos.x + 1, pos.y) && height > this.game.world.tiles[pos.x + 1][pos.y].height) {
                this.g.moveTo((pos.x + 1) * pixelWidth, pos.y * pixelHeight);
                this.g.lineTo((pos.x + 1) * pixelWidth, pos.y * pixelHeight + pixelHeight);
                this.g.stroke();
            }
            if (this.game.world.withinWorld(pos.x - 1, pos.y) && height > this.game.world.tiles[pos.x - 1][pos.y].height) {
                this.g.moveTo(pos.x * pixelWidth - 1, pos.y * pixelHeight);
                this.g.lineTo(pos.x * pixelWidth - 1, pos.y * pixelHeight + pixelHeight);
                this.g.stroke();
            }
            if (this.game.world.withinWorld(pos.x, pos.y + 1) && height > this.game.world.tiles[pos.x][pos.y + 1].height) {
                this.g.moveTo(pos.x * pixelWidth, (pos.y + 1) * pixelHeight);
                this.g.lineTo(pos.x * pixelWidth + pixelWidth, (pos.y + 1) * pixelHeight);
                this.g.stroke();
            }
            if (this.game.world.withinWorld(pos.x, pos.y - 1) && height > this.game.world.tiles[pos.x][pos.y - 1].height) {
                this.g.moveTo(pos.x * pixelWidth, pos.y * pixelHeight - 1);
                this.g.lineTo(pos.x * pixelWidth + pixelWidth, pos.y * pixelHeight - 1);
                this.g.stroke();
            }
        };
        this.drawBuildings = (pixelWidth, pixelHeight) => {
            if (this.g === undefined)
                return;
            for (let i = 0; i < this.game.buildings.length; i++) {
                const building = this.game.buildings[i];
                this.drawHealthBar(pixelWidth, pixelHeight, building);
                this.drawEnergyBar(pixelWidth, pixelHeight, building);
                if (!building.built) {
                    this.g.filter = "grayscale(1)";
                }
                if (building instanceof _chars_Collector__WEBPACK_IMPORTED_MODULE_0__.Collector) {
                    this.g.drawImage(CollectorImg, building.pos.x * pixelWidth, building.pos.y * pixelHeight, building.size * pixelWidth, building.size * pixelHeight);
                }
                else if (building instanceof _chars_Blaster__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                    this.g.drawImage(BlasterImg, building.pos.x * pixelWidth, building.pos.y * pixelHeight, building.size * pixelWidth, building.size * pixelHeight);
                }
                else if (building instanceof _chars_Stabilizer__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                    this.g.drawImage(StabilizerImg, building.pos.x * pixelWidth, building.pos.y * pixelHeight, building.size * pixelWidth, building.size * pixelHeight);
                }
                else if (building instanceof _chars_Player__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                    this.g.drawImage(PlayerImg, this.game.player.pos.x * pixelWidth, this.game.player.pos.y * pixelHeight, this.game.player.size * pixelWidth, this.game.player.size * pixelHeight);
                }
                else {
                    console.log("error cant draw this building");
                }
                this.g.filter = "grayscale(0)";
            }
        };
        this.drawHealthBar = (pixelWidth, pixelHeight, build) => {
            if (this.g === undefined)
                return;
            if (build.health < build.maxHealth) {
                let barPosY = build.pos.y * pixelHeight + pixelHeight * build.size;
                this.g.beginPath();
                this.g.fillStyle = "black";
                this.g.fillRect(build.pos.x * pixelWidth, barPosY, pixelWidth, pixelHeight / 3);
                let barWidth = pixelWidth * build.size / build.maxHealth * build.health;
                this.g.beginPath();
                this.g.fillStyle = "green";
                this.g.fillRect(build.pos.x * pixelWidth, barPosY, barWidth, pixelHeight / 3);
            }
        };
        this.drawEnergyBar = (pixelWidth, pixelHeight, build) => {
            if (this.g === undefined)
                return;
            if (build instanceof _chars_Player__WEBPACK_IMPORTED_MODULE_1__["default"])
                return;
            if (build.maxEnergy > 0) {
                this.g.beginPath();
                this.g.fillStyle = "black";
                this.g.fillRect(build.pos.x * pixelWidth, build.pos.y * pixelHeight - pixelHeight / 4, pixelWidth, pixelHeight / 3);
                let barWidth = pixelWidth * build.size / build.maxEnergy * build.energy;
                this.g.beginPath();
                this.g.fillStyle = "red";
                this.g.fillRect(build.pos.x * pixelWidth, build.pos.y * pixelHeight - pixelHeight / 4, barWidth, pixelHeight / 3);
            }
        };
        this.width = 0;
        this.height = 0;
        this.game = game;
    }
    render() {
        if (this.g === undefined)
            return;
        let pixelWidth = (this.width / this.game.world.dimensions.x);
        let pixelHeight = (this.height / this.game.world.dimensions.y);
        this.drawTerain(pixelWidth, pixelHeight);
        // draw enemy
        this.drawEmitter(pixelWidth, pixelHeight);
        this.drawCreeper(pixelWidth, pixelHeight);
        // draw player
        this.drawRoutes(pixelWidth, pixelHeight);
        this.drawBuildings(pixelWidth, pixelHeight);
        this.drawPackets(pixelWidth, pixelHeight);
        this.drawProjectile(pixelWidth, pixelHeight);
    }
    drawTerain(pixelWidth, pixelHeight) {
        var _a;
        if (this.g === undefined)
            return;
        for (let i = 0; i < this.game.world.dimensions.x; i++) {
            for (let j = 0; j < this.game.world.dimensions.y; j++) {
                switch (this.game.world.tiles[i][j].height) {
                    case 0:
                        this.g.beginPath();
                        this.g.fillStyle = "#bba6a5";
                        this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                        break;
                    case 1:
                        this.g.beginPath();
                        this.g.fillStyle = "#95897e";
                        this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                        break;
                    case 2:
                        this.g.beginPath();
                        this.g.fillStyle = "#7c6d68";
                        this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                        break;
                    default:
                        break;
                }
                if (this.game.world.tiles[i][j].collector && ((_a = this.game.world.tiles[i][j].collector) === null || _a === void 0 ? void 0 : _a.connected)) {
                    this.g.beginPath();
                    this.g.fillStyle = "rgba(124,252,0, 0.2)";
                    this.g.fillRect(pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                }
                this.drawShadows(pixelWidth, pixelHeight, new _helper_Point__WEBPACK_IMPORTED_MODULE_5__["default"](i, j));
            }
        }
    }
    drawRoutes(pixelWidth, pixelHeight) {
        if (this.g === undefined)
            return;
        for (let i = 0; i < this.game.connections.connections.length; i++) {
            const route = this.game.connections.connections[i];
            this.g.beginPath();
            this.g.strokeStyle = "white";
            this.g.moveTo(route.a.x * pixelWidth, route.a.y * pixelHeight);
            this.g.lineTo(route.b.x * pixelWidth, route.b.y * pixelHeight);
            this.g.lineWidth = 2;
            this.g.stroke();
        }
        this.g.lineWidth = 1;
    }
    drawEmitter(pixelWidth, pixelHeight) {
        if (this.g === undefined)
            return;
        for (let i = 0; i < this.game.emitters.length; i++) {
            const creeper = this.game.emitters[i];
            this.g.drawImage(EmitterImg, creeper.pos.x * pixelWidth, creeper.pos.y * pixelHeight, emitterSize * pixelWidth, emitterSize * pixelHeight);
        }
    }
    drawCreeper(pixelWidth, pixelHeight) {
        let crepperTileSize = 16;
        if (this.g === undefined)
            return;
        for (let i = -this.game.world.dimensions.x; i <= this.game.world.dimensions.x; i++) {
            for (let j = -this.game.world.dimensions.x; j <= this.game.world.dimensions.y; j++) {
                if (this.game.world.withinWorld(i, j)) {
                    let height = this.game.world.tiles[i][j].height;
                    for (let k = 0; k < 9; k++) {
                        if (this.game.world.tiles[i][j].creep > k) {
                            let left = 0, right = 0, up = 0, down = 0;
                            if (i - 1 < 0) {
                                left = 0;
                            }
                            else if (this.game.world.tiles[i - 1][j].creep > k || this.game.world.tiles[i - 1][j].height > height) {
                                left = 1;
                            }
                            if (i + 1 > this.game.world.dimensions.x - 1) {
                                right = 0;
                            }
                            else if (this.game.world.tiles[i + 1][j].creep > k || this.game.world.tiles[i + 1][j].height > height) {
                                right = 1;
                            }
                            if (j - 1 < 0) {
                                up = 0;
                            }
                            else if (this.game.world.tiles[i][j - 1].creep > k || this.game.world.tiles[i][j - 1].height > height) {
                                up = 1;
                            }
                            if (j + 1 > this.game.world.dimensions.y - 1) {
                                down = 0;
                            }
                            else if (this.game.world.tiles[i][j + 1].creep > k || this.game.world.tiles[i][j + 1].height > height) {
                                down = 1;
                            }
                            // index of the Images image 1 is right image 2 is up image 4 is left image 8 is down
                            let index = (8 * down) + (4 * left) + (2 * up) + right;
                            this.g.beginPath();
                            this.g.drawImage(CreeperImg, index * crepperTileSize, 0, crepperTileSize, crepperTileSize, pixelWidth * i, pixelHeight * j, pixelWidth, pixelHeight);
                        }
                    }
                }
            }
        }
    }
    drawProjectile(pixelWidth, pixelHeight) {
        if (this.g === undefined)
            return;
        for (let i = 0; i < this.game.projectiles.length; i++) {
            const projectile = this.game.projectiles[i];
            this.g.beginPath();
            this.g.strokeStyle = "red";
            this.g.moveTo(projectile.pos.x * pixelWidth, projectile.pos.y * pixelHeight);
            this.g.lineTo(projectile.targetPos.x * pixelWidth, projectile.targetPos.y * pixelHeight);
            this.g.lineWidth = 1;
            this.g.stroke();
        }
    }
    drawPackets(pixelWidth, pixelHeight) {
        if (this.g === undefined)
            return;
        for (let packet of this.game.packets) {
            this.g.beginPath();
            switch (packet.type) {
                case _chars_Packet__WEBPACK_IMPORTED_MODULE_3__.PacketType.Health:
                    this.g.fillStyle = "gray";
                    break;
                case _chars_Packet__WEBPACK_IMPORTED_MODULE_3__.PacketType.Energy:
                    this.g.fillStyle = "red";
                    break;
                default:
                    console.log("Error new PacketType");
                    break;
            }
            this.g.arc(packet.pos.x * pixelWidth, packet.pos.y * pixelHeight, 3, 0, 2 * Math.PI);
            this.g.fill();
        }
    }
    setWidthHeight(width, height) {
        this.width = width;
        this.height = height;
    }
    setRenderContext(g) {
        this.g = g;
    }
}


/***/ }),

/***/ "./src/helper/Connection.ts":
/*!**********************************!*\
  !*** ./src/helper/Connection.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Connection": function() { return /* binding */ Connection; },
/* harmony export */   "Connections": function() { return /* binding */ Connections; }
/* harmony export */ });
class Connection {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
class Connections {
    constructor() {
        this.connections = [];
        this.add = (newConnection) => {
            let found = false;
            for (let i = 0; i < this.connections.length; i++) {
                const connection = this.connections[i];
                if (connection.a.x === newConnection.a.x && connection.a.y === newConnection.a.y) {
                    if (connection.b.x === newConnection.b.x && connection.b.y === newConnection.b.y) {
                        found = true;
                        break;
                    }
                }
                if (connection.a.x === newConnection.b.x && connection.a.y === newConnection.b.y) {
                    if (connection.b.x === newConnection.a.x && connection.b.y === newConnection.a.y) {
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                this.connections.push(newConnection);
            }
        };
        this.clear = () => {
            this.connections = [];
        };
    }
}


/***/ }),

/***/ "./src/helper/Helper.ts":
/*!******************************!*\
  !*** ./src/helper/Helper.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distance": function() { return /* binding */ distance; },
/* harmony export */   "getRandomEntry": function() { return /* binding */ getRandomEntry; },
/* harmony export */   "cloneArray": function() { return /* binding */ cloneArray; },
/* harmony export */   "UpdateAction": function() { return /* binding */ UpdateAction; },
/* harmony export */   "GameState": function() { return /* binding */ GameState; },
/* harmony export */   "EBuilding": function() { return /* binding */ EBuilding; }
/* harmony export */ });
function distance(pointA, pointB) {
    return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
}
function getRandomEntry(list) {
    let rand = Math.floor(Math.random() * list.length - 1) + 1;
    return list[rand];
}
function cloneArray(list) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        newList.push(list[i]);
    }
    return newList;
}
var UpdateAction;
(function (UpdateAction) {
    UpdateAction[UpdateAction["Add"] = 0] = "Add";
    UpdateAction[UpdateAction["Remove"] = 1] = "Remove";
})(UpdateAction || (UpdateAction = {}));
var GameState;
(function (GameState) {
    GameState[GameState["InGame"] = 0] = "InGame";
    GameState[GameState["Won"] = 1] = "Won";
    GameState[GameState["Lost"] = 2] = "Lost";
})(GameState || (GameState = {}));
var EBuilding;
(function (EBuilding) {
    EBuilding[EBuilding["Collector"] = 0] = "Collector";
    EBuilding[EBuilding["Blaster"] = 1] = "Blaster";
    EBuilding[EBuilding["Stabilizer"] = 2] = "Stabilizer";
})(EBuilding || (EBuilding = {}));


/***/ }),

/***/ "./src/helper/Point.ts":
/*!*****************************!*\
  !*** ./src/helper/Point.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Point; },
/* harmony export */   "pointIsInRange": function() { return /* binding */ pointIsInRange; }
/* harmony export */ });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// Check whether a point lies strictly inside a given circle
function pointInRange(a, b, x, y, range) {
    let distPoints = (a - x) * (a - x) + (b - y) * (b - y);
    range *= range;
    if (distPoints < range) {
        return true;
    }
    else {
        return false;
    }
}
function pointIsInRange(pointA, pointB, range) {
    return pointInRange(pointA.x, pointA.y, pointB.x, pointB.y, range);
}


/***/ }),

/***/ "./src/helper/Route.ts":
/*!*****************************!*\
  !*** ./src/helper/Route.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Route; }
/* harmony export */ });
class Route {
    constructor() {
        this.nodes = [];
        this.remove = false;
        this.distanceTravelled = 0;
        this.distanceRemaining = 0;
    }
}


/***/ }),

/***/ "./src/helper/Tile.ts":
/*!****************************!*\
  !*** ./src/helper/Tile.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Tile; }
/* harmony export */ });
class Tile {
    constructor() {
        // index = -1;
        this.full = false;
        this.collector = null;
        this.creep = 0;
        this.newcreep = 0;
        this.height = 0;
    }
}


/***/ }),

/***/ "./src/helper/World.ts":
/*!*****************************!*\
  !*** ./src/helper/World.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ World; }
/* harmony export */ });
/* harmony import */ var _inits_HeightMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inits/HeightMap */ "./src/inits/HeightMap.ts");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ "./src/helper/Tile.ts");


class World {
    constructor(dim) {
        this.getHighestTile = (vec) => {
            return this.tiles[vec.x][vec.y].height;
        };
        this.tiles = [];
        this.dimensions = dim;
    }
    createWorld() {
        this.tiles = new Array(this.dimensions.x);
        for (let i = 0; i < this.dimensions.x; i++) {
            this.tiles[i] = new Array(this.dimensions.y);
            for (let j = 0; j < this.dimensions.y; j++) {
                this.tiles[i][j] = new _Tile__WEBPACK_IMPORTED_MODULE_1__["default"]();
            }
        }
        let heightMap = (0,_inits_HeightMap__WEBPACK_IMPORTED_MODULE_0__.HeightMap)();
        for (let i = 0; i < this.dimensions.x; i++) {
            for (let j = 0; j < this.dimensions.y; j++) {
                let height = heightMap[j][i];
                if (height > 6)
                    height = 6;
                this.tiles[i][j].height = height;
            }
        }
    }
    withinWorld(x, y) {
        return (x > -1 && x < this.dimensions.x && y > -1 && y < this.dimensions.y);
    }
}


/***/ }),

/***/ "./src/inits/HeightMap.ts":
/*!********************************!*\
  !*** ./src/inits/HeightMap.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeightMap": function() { return /* binding */ HeightMap; }
/* harmony export */ });
function HeightMap() {
    let terain = [[1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    terain.toString = function () {
        let lines = [];
        for (let i = 0; i < 48; i++) {
            lines.push("[" + this[i].join(", ") + "]");
        }
        return "[" + lines.join(",\n") + "\n];";
    };
    return terain;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/main */ "./src/actions/main.ts");

var main = new _actions_main__WEBPACK_IMPORTED_MODULE_0__["default"]();

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2ZrQztBQUNsQyxlQUFlLHFEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvaW1nL0JsYXN0ZXIucG5nIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2ltZy9Db2xsZWN0b3IucG5nIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2ltZy9DcmVlcGVyLnBuZyIsIndlYnBhY2s6Ly93YXRlci13b3JsZC8uL3NyYy9pbWcvRW1pdHRlci5wbmciLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvaW1nL1BsYXllci5wbmciLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvaW1nL1N0YWJpbGl6ZXIucG5nIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2FjdGlvbnMvT25DbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvYWN0aW9ucy9tYWluLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2NoYXJzL0JsYXN0ZXIudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvY2hhcnMvQnVpbGRpbmcudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvY2hhcnMvQ29sbGVjdG9yLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2NoYXJzL0VtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvY2hhcnMvR2FtZS50cyIsIndlYnBhY2s6Ly93YXRlci13b3JsZC8uL3NyYy9jaGFycy9QYWNrZXQudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvY2hhcnMvUGxheWVyLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2NoYXJzL1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvY2hhcnMvU3RhYmlsaXplci50cyIsIndlYnBhY2s6Ly93YXRlci13b3JsZC8uL3NyYy9jbG9ja3MvVXBkYXRlQnVpbGRpbmdzLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2Nsb2Nrcy9VcGRhdGVDcmVlcGVyLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2Nsb2Nrcy9VcGRhdGVHYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvY2xvY2tzL1VwZGF0ZVBhY2tldFF1ZXVlLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2Nsb2Nrcy9VcGRhdGVQYWNrZXRzLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2Nsb2Nrcy9VcGRhdGVQcm9qZWN0aWxlcy50cyIsIndlYnBhY2s6Ly93YXRlci13b3JsZC8uL3NyYy9kcmF3L0RyYXdNYWluLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2hlbHBlci9Db25uZWN0aW9uLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2hlbHBlci9IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvaGVscGVyL1BvaW50LnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkLy4vc3JjL2hlbHBlci9Sb3V0ZS50cyIsIndlYnBhY2s6Ly93YXRlci13b3JsZC8uL3NyYy9oZWxwZXIvVGlsZS50cyIsIndlYnBhY2s6Ly93YXRlci13b3JsZC8uL3NyYy9oZWxwZXIvV29ybGQudHMiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvLi9zcmMvaW5pdHMvSGVpZ2h0TWFwLnRzIiwid2VicGFjazovL3dhdGVyLXdvcmxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhdGVyLXdvcmxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YXRlci13b3JsZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dhdGVyLXdvcmxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2F0ZXItd29ybGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YXRlci13b3JsZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93YXRlci13b3JsZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL0JsYXN0ZXIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9Db2xsZWN0b3IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9DcmVlcGVyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvRW1pdHRlci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1BsYXllci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1N0YWJpbGl6ZXIucG5nXCI7IiwiaW1wb3J0IHsgRUJ1aWxkaW5nIH0gZnJvbSBcIi4uL2hlbHBlci9IZWxwZXJcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9oZWxwZXIvUG9pbnRcIjtcclxuZXhwb3J0IHZhciBDdXJzZXJzdGF0ZTtcclxuKGZ1bmN0aW9uIChDdXJzZXJzdGF0ZSkge1xyXG4gICAgQ3Vyc2Vyc3RhdGVbQ3Vyc2Vyc3RhdGVbXCJOdWxsXCJdID0gMF0gPSBcIk51bGxcIjtcclxuICAgIEN1cnNlcnN0YXRlW0N1cnNlcnN0YXRlW1wiQ29sbGVjdG9yXCJdID0gMV0gPSBcIkNvbGxlY3RvclwiO1xyXG4gICAgQ3Vyc2Vyc3RhdGVbQ3Vyc2Vyc3RhdGVbXCJCbGFzdGVyXCJdID0gMl0gPSBcIkJsYXN0ZXJcIjtcclxufSkoQ3Vyc2Vyc3RhdGUgfHwgKEN1cnNlcnN0YXRlID0ge30pKTtcclxuZXhwb3J0IGNsYXNzIE9uQ2xpY2tIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgICAgICB0aGlzLmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gdG9kbyBtYXliZSBub3QgY2FsY3VsYXRpbmcgcmlnaHRcclxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGlsZVdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoIC8gdGhpcy5nYW1lLndvcmxkLmRpbWVuc2lvbnMueDtcclxuICAgICAgICAgICAgbGV0IHRpbGVIZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0IC8gdGhpcy5nYW1lLndvcmxkLmRpbWVuc2lvbnMueTtcclxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKChlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdCkgLyB0aWxlV2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoKGUuY2xpZW50WSAtIGNhbnZhcy5vZmZzZXRUb3ApIC8gdGlsZUhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ2xpY2soeCwgeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNvbGxlY3RvckNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnNlcihDdXJzZXJzdGF0ZS5Db2xsZWN0b3IpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCbGFzdGVyQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3Vyc2VyKEN1cnNlcnN0YXRlLkNvbGxlY3Rvcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnNlclN0YXRlID0gQ3Vyc2Vyc3RhdGUuTnVsbDtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2spO1xyXG4gICAgICAgIChfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sbGVjdG9yXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ29sbGVjdG9yQ2xpY2spO1xyXG4gICAgICAgIChfYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxhc3RlclwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUJsYXN0ZXJDbGljayk7XHJcbiAgICB9XHJcbiAgICBjYW52YXNDbGljayh4LCB5KSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnNlclN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ3Vyc2Vyc3RhdGUuTnVsbDpcclxuICAgICAgICAgICAgICAgIC8vIGhlcmUgdGhpbmdzIHRoYXQgYXJlIG9uIHRoZSBjYW52YXMgZ2V0IGhhbmRlbGRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aGluZyB0b2RvIGhlcmUuIE5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDdXJzZXJzdGF0ZS5Db2xsZWN0b3I6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyeSB0byBwbGFjZSBhIENvbGxlY3RvciBhdCBcIiArIHggKyBcIiBcIiArIHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmFkZEJ1aWxkaW5nKG5ldyBQb2ludCh4LCB5KSwgRUJ1aWxkaW5nLkNvbGxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDdXJzZXJzdGF0ZS5CbGFzdGVyOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcnkgdG8gcGxhY2UgYSBCbGFzdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmFkZEJ1aWxkaW5nKG5ldyBQb2ludCh4LCB5KSwgRUJ1aWxkaW5nLkJsYXN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJzZXJTdGF0ZSA9IEN1cnNlcnN0YXRlLk51bGw7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VDdXJzZXIobmV3Q3Vyc2VyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgYXJlIGhvbGRpbmcgYSBcIiArIEN1cnNlcnN0YXRlW25ld0N1cnNlcl0pO1xyXG4gICAgICAgIHRoaXMuY3Vyc2VyU3RhdGUgPSBuZXdDdXJzZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IERyYXdNYWluIGZyb20gXCIuLi9kcmF3L0RyYXdNYWluXCI7XHJcbmltcG9ydCB7IE9uQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vT25DbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9jaGFycy9HYW1lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICB0aGlzLnJ1biA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIgPSBuZXcgT25DbGlja0hhbmRsZXIodGhpcy5nYW1lKTtcclxuICAgICAgICB0aGlzLmRyYXcgPSBuZXcgRHJhd01haW4odGhpcy5nYW1lKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmRyYXcucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBzZXRDYW52YXNEaW0od2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZHJhdy5zZXRXaWR0aEhlaWdodCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHNldENhbnZhc09mZnNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7IHgsIHkgfTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmNsaWNrSGFuZGxlci5jaGFuZ2VDdXJzZXIoc3RhdGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldFJhbmRvbUVudHJ5IH0gZnJvbSBcIi4uL2hlbHBlci9IZWxwZXJcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9oZWxwZXIvUG9pbnRcIjtcclxuaW1wb3J0IEJ1aWxkaW5nIGZyb20gXCIuL0J1aWxkaW5nXCI7XHJcbmltcG9ydCBQcm9qZWN0aWxlIGZyb20gXCIuL1Byb2plY3RpbGVcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhc3RlciBleHRlbmRzIEJ1aWxkaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKHBvcywgZ2FtZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZXJneSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMud2VhcG9uUmFkaXVzOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5wb3MueCAtIHI7IGkgPD0gdGhpcy5wb3MueCArIHI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gdGhpcy5wb3MueSAtIHI7IGogPD0gdGhpcy5wb3MueSArIHI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53b3JsZC53aXRoaW5Xb3JsZChpLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud29ybGQudGlsZXNbaV1bal0uY3JlZXAgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHMucHVzaChuZXcgUG9pbnQoaSwgaikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzaG9vdCB0aGUgb25lcyB0aGF0IGFyZSBmdXJ0aGVyIGF3YXlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdCByYW5kb20gdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGdldFJhbmRvbUVudHJ5KHRhcmdldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkeCA9IHRhcmdldC54IC0gdGhpcy5nZXRDZW50ZXIoKS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkeSA9IHRhcmdldC55IC0gdGhpcy5nZXRDZW50ZXIoKS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRBbmdsZSA9IE1hdGguYXRhbjIoZHgsIGR5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVyZ3kgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdGlsZSA9IG5ldyBQcm9qZWN0aWxlKHRoaXMuZ2V0Q2VudGVyKCksIHRhcmdldCwgdGFyZ2V0QW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wcm9qZWN0aWxlcy5wdXNoKHByb2plY3RpbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IDU7XHJcbiAgICAgICAgdGhpcy5zaXplID0gMTtcclxuICAgICAgICB0aGlzLm1heEVuZXJneSA9IDIwO1xyXG4gICAgICAgIHRoaXMud2VhcG9uUmFkaXVzID0gODtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2hlbHBlci9Qb2ludFwiO1xyXG5pbXBvcnQgeyBQYWNrZXRUeXBlIH0gZnJvbSBcIi4vUGFja2V0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1aWxkaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5idWlsdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gMDtcclxuICAgICAgICB0aGlzLm1heEVuZXJneSA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhSZXF1ZXN0cyA9IDA7XHJcbiAgICAgICAgdGhpcy5lbmVyZ3lSZXF1ZXN0cyA9IDA7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdldENlbnRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvcy54ICsgKHRoaXMuc2l6ZSAvIDIpLCB0aGlzLnBvcy55ICsgKHRoaXMuc2l6ZSAvIDIpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFBhY2tldCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGhlYWx0aERlbHRhID0gdGhpcy5tYXhIZWFsdGggLSB0aGlzLmhlYWx0aCAtIHRoaXMuaGVhbHRoUmVxdWVzdHM7XHJcbiAgICAgICAgICAgIGlmIChoZWFsdGhEZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5xdWV1ZVBhY2tldCh0aGlzLCBQYWNrZXRUeXBlLkhlYWx0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVpbHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVyZ3lEZWx0YSA9IHRoaXMubWF4RW5lcmd5IC0gdGhpcy5lbmVyZ3kgLSB0aGlzLmVuZXJneVJlcXVlc3RzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZXJneURlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5xdWV1ZVBhY2tldCh0aGlzLCBQYWNrZXRUeXBlLkVuZXJneSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGFrZURhbWFnZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud29ybGQudGlsZXNbdGhpcy5wb3MueCArIGldW3RoaXMucG9zLnkgKyBqXS5jcmVlcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gdGhpcy5nYW1lLndvcmxkLnRpbGVzW3RoaXMucG9zLnggKyBpXVt0aGlzLnBvcy55ICsgal0uY3JlZXAgLyAxMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnJlbW92ZUJ1aWxkaW5nKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvaW50LCB7IHBvaW50SXNJblJhbmdlIH0gZnJvbSBcIi4uL2hlbHBlci9Qb2ludFwiO1xyXG5pbXBvcnQgQnVpbGRpbmcgZnJvbSBcIi4vQnVpbGRpbmdcIjtcclxuZXhwb3J0IGNsYXNzIENvbGxlY3RvciBleHRlbmRzIEJ1aWxkaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKHBvcywgZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0ZWRFbmVyZ3kgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gNTtcclxuICAgICAgICB0aGlzLnNpemUgPSAxO1xyXG4gICAgfVxyXG4gICAgY29sbGVjdEVuZXJneSgpIHtcclxuICAgICAgICBpZiAodGhpcy5idWlsdCAmJiB0aGlzLmNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLnRpbGVzW3RoaXMucG9zLnhdW3RoaXMucG9zLnldLmhlaWdodDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IC0yOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gLTI7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IG5ldyBQb2ludCh0aGlzLnBvcy54ICsgaSwgdGhpcy5wb3MueSArIGopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud29ybGQud2l0aGluV29ybGQoY3VycmVudFBvcy54LCBjdXJyZW50UG9zLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLnRpbGVzW2N1cnJlbnRQb3MueF1bY3VycmVudFBvcy55XS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludElzSW5SYW5nZShuZXcgUG9pbnQodGhpcy5wb3MueCwgdGhpcy5wb3MueSksIG5ldyBQb2ludChjdXJyZW50UG9zLngsIGN1cnJlbnRQb3MueSksIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZUhlaWdodCA9PT0gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53b3JsZC50aWxlc1tjdXJyZW50UG9zLnhdW2N1cnJlbnRQb3MueV0uY29sbGVjdG9yID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGVkRW5lcmd5ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3RlZEVuZXJneSA+PSAxMDApIHtcclxuICAgICAgICAgICAgbGV0IG5ld0VuZXJneSA9IHRoaXMuZ2FtZS5wbGF5ZXIuZW5lcmd5ICsgMTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0ZWRFbmVyZ3kgLT0gMTAwO1xyXG4gICAgICAgICAgICBpZiAobmV3RW5lcmd5ID4gdGhpcy5nYW1lLnBsYXllci5tYXhFbmVyZ3kpXHJcbiAgICAgICAgICAgICAgICBuZXdFbmVyZ3kgPSB0aGlzLmdhbWUucGxheWVyLm1heEVuZXJneTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXllci5lbmVyZ3kgPSBuZXdFbmVyZ3k7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBFbWl0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuc3Bhd25DcmVlcGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUud29ybGQudGlsZXNbdGhpcy5wb3MueF1bdGhpcy5wb3MueV0uY3JlZXAgKz0gdGhpcy5zdHJlbmd0aDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5zdHJlbmd0aCA9IDI1O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tIFwiLi9FbWl0dGVyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBXb3JsZCBmcm9tIFwiLi4vaGVscGVyL1dvcmxkXCI7XHJcbmltcG9ydCBDcmVlcGVyVXBkYXRlIGZyb20gXCIuLi9jbG9ja3MvVXBkYXRlQ3JlZXBlclwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0b3IgfSBmcm9tIFwiLi9Db2xsZWN0b3JcIjtcclxuaW1wb3J0IFBvaW50LCB7IHBvaW50SXNJblJhbmdlIH0gZnJvbSBcIi4uL2hlbHBlci9Qb2ludFwiO1xyXG5pbXBvcnQgeyBjbG9uZUFycmF5LCBkaXN0YW5jZSwgRUJ1aWxkaW5nLCBHYW1lU3RhdGUsIFVwZGF0ZUFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXIvSGVscGVyXCI7XHJcbmltcG9ydCB7IENvbm5lY3Rpb24sIENvbm5lY3Rpb25zIH0gZnJvbSBcIi4uL2hlbHBlci9Db25uZWN0aW9uXCI7XHJcbmltcG9ydCBCbGFzdGVyIGZyb20gXCIuL0JsYXN0ZXJcIjtcclxuaW1wb3J0IFVwZGF0ZUJ1aWxkaWducyBmcm9tIFwiLi4vY2xvY2tzL1VwZGF0ZUJ1aWxkaW5nc1wiO1xyXG5pbXBvcnQgVXBkYXRlUHJvamVjdGlsZXMgZnJvbSBcIi4uL2Nsb2Nrcy9VcGRhdGVQcm9qZWN0aWxlc1wiO1xyXG5pbXBvcnQgUGFja2V0LCB7IFBhY2tldFR5cGUgfSBmcm9tIFwiLi9QYWNrZXRcIjtcclxuaW1wb3J0IFVwZGF0ZVBhY2tldHMgZnJvbSBcIi4uL2Nsb2Nrcy9VcGRhdGVQYWNrZXRzXCI7XHJcbmltcG9ydCBSb3V0ZSBmcm9tIFwiLi4vaGVscGVyL1JvdXRlXCI7XHJcbmltcG9ydCBVcGRhdGVwYWNrZXRRdWV1ZSBmcm9tIFwiLi4vY2xvY2tzL1VwZGF0ZVBhY2tldFF1ZXVlXCI7XHJcbmltcG9ydCBTdGFiaWxpemVyIGZyb20gXCIuL1N0YWJpbGl6ZXJcIjtcclxuaW1wb3J0IHsgVXBkYXRlR2FtZVN0YXRlIH0gZnJvbSBcIi4uL2Nsb2Nrcy9VcGRhdGVHYW1lU3RhdGVcIjtcclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZGluZ3MgPSBbXTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IG5ldyBDb25uZWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhY2tldHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5wYWNrZXRRdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhYmlsaXplciA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQnVpbGRpbmcgPSAoYnVpbGRpbmcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZGluZ3MgPSB0aGlzLmJ1aWxkaW5ncy5maWx0ZXIoYnVpbGQgPT4gYnVpbGQgIT09IGJ1aWxkaW5nKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb25uZWN0aW9ucygpO1xyXG4gICAgICAgICAgICBpZiAoYnVpbGRpbmcgaW5zdGFuY2VvZiBDb2xsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChidWlsZGluZy5idWlsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sbGVjdGlvbkZpZWxkcyhidWlsZGluZywgVXBkYXRlQWN0aW9uLlJlbW92ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wYWNrZXRzLmZvckVhY2gocGFja2V0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQudGFyZ2V0ID09PSBidWlsZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFja2V0cy5kZWxldGUocGFja2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFja2V0UXVldWUgPSB0aGlzLnBhY2tldFF1ZXVlLmZpbHRlcihwYWNrZXQgPT4gcGFja2V0LnRhcmdldCAhPT0gYnVpbGRpbmcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gYSBBKiBhbGdvcnl0aG0gZm9yIGZpbmRpbmcgc2hvcnRlc3QgcGF0aFxyXG4gICAgICAgIHRoaXMuZmluZFJvdXRlID0gKHBhY2tldCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm91dGVzID0gW107XHJcbiAgICAgICAgICAgIGxldCByb3V0ZSA9IG5ldyBSb3V0ZSgpO1xyXG4gICAgICAgICAgICByb3V0ZS5ub2Rlcy5wdXNoKHBhY2tldC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgcm91dGVzLnB1c2gocm91dGUpO1xyXG4gICAgICAgICAgICB3aGlsZSAocm91dGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZXNbMF0ubm9kZXNbcm91dGVzWzBdLm5vZGVzLmxlbmd0aCAtIDFdID09PSBwYWNrZXQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkUm91dGUgPSByb3V0ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0Tm9kZSA9IG9sZFJvdXRlID09PSBudWxsIHx8IG9sZFJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbGRSb3V0ZS5ub2Rlc1tvbGRSb3V0ZS5ub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgIGxldCBuZWlnaGJvdXJzID0gdGhpcy5nZXROZWlnaGJvdXJCdWlsZGluZ3MobGFzdE5vZGUsIHBhY2tldC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWlnaGJvdXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmluUm91dGUobmVpZ2hib3Vyc1tpXSwgb2xkUm91dGUgPT09IG51bGwgfHwgb2xkUm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9sZFJvdXRlLm5vZGVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um91dGUgPSBuZXcgUm91dGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um91dGUubm9kZXMgPSBjbG9uZUFycmF5KG9sZFJvdXRlID09PSBudWxsIHx8IG9sZFJvdXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbGRSb3V0ZS5ub2Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvdXRlLm5vZGVzLnB1c2gobmVpZ2hib3Vyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvdXRlLmRpc3RhbmNlVHJhdmVsbGVkID0gb2xkUm91dGUgPT09IG51bGwgfHwgb2xkUm91dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9sZFJvdXRlLmRpc3RhbmNlVHJhdmVsbGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIG5ldyBkaXN0YW5jZSB0cmF2ZWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbnRlckEgPSBuZXdSb3V0ZS5ub2Rlc1tuZXdSb3V0ZS5ub2Rlcy5sZW5ndGggLSAxXS5nZXRDZW50ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbnRlckIgPSBuZXdSb3V0ZS5ub2Rlc1tuZXdSb3V0ZS5ub2Rlcy5sZW5ndGggLSAyXS5nZXRDZW50ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um91dGUuZGlzdGFuY2VUcmF2ZWxsZWQgKz0gZGlzdGFuY2UoY2VudGVyQSwgY2VudGVyQik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCByZW1pYW5pbmcgZGlzdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbnRlckMgPSBwYWNrZXQudGFyZ2V0LmdldENlbnRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3V0ZS5kaXN0YW5jZVJlbWFpbmluZyA9IGRpc3RhbmNlKGNlbnRlckMsIGNlbnRlckEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMucHVzaChuZXdSb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZmluZCByb3V0ZXMgdGhhdCBlbmQgYXQgdGhlIHNhbWUgbm9kZSwgcmVtb3ZlIHRob3NlIHdpdGggdGhlIGxvbmdlciBkaXN0YW5jZSB0cmF2ZWxsZWRcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3V0ZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZXNbaV0ubm9kZXNbcm91dGVzW2ldLm5vZGVzLmxlbmd0aCAtIDFdID09PSByb3V0ZXNbal0ubm9kZXNbcm91dGVzW2pdLm5vZGVzLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlc1tpXS5kaXN0YW5jZVRyYXZlbGxlZCA8IHJvdXRlc1tqXS5kaXN0YW5jZVRyYXZlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXNbal0ucmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocm91dGVzW2ldLmRpc3RhbmNlVHJhdmVsbGVkID4gcm91dGVzW2pdLmRpc3RhbmNlVHJhdmVsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlc1tpXS5yZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgcm91dGVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZXNbaV0ucmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm91dGVzLnNvcnQoKGEsIGIpID0+ICgoYS5kaXN0YW5jZVRyYXZlbGxlZCArIGEuZGlzdGFuY2VSZW1haW5pbmcpIC0gKGIuZGlzdGFuY2VUcmF2ZWxsZWQgKyBiLmRpc3RhbmNlUmVtYWluaW5nKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIGEgcm91dGUgaXMgbGVmdCBzZXQgdGhlIHNlY29uZCBlbGVtZW50IGFzIHRoZSBuZXh0IG5vZGUgZm9yIHRoZSBwYWNrZXRcclxuICAgICAgICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYWNrZXQuY3VycmVudFRhcmdldCA9IHJvdXRlc1swXS5ub2Rlc1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhY2tldC5jdXJyZW50VGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5FbmVyZ3kpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWNrZXQudGFyZ2V0LmVuZXJneVJlcXVlc3RzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhY2tldC50YXJnZXQuZW5lcmd5UmVxdWVzdHMgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWNrZXQudGFyZ2V0LmVuZXJneVJlcXVlc3RzID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkhlYWx0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhY2tldC50YXJnZXQuaGVhbHRoUmVxdWVzdHMtLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFja2V0LnRhcmdldC5oZWFsdGhSZXF1ZXN0cyA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tldC50YXJnZXQuaGVhbHRoUmVxdWVzdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFja2V0LnJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5Sb3V0ZSA9IChuZWlnaGJvdXIsIG5vZGVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3VyLnBvcy54ID09PSBub2Rlc1tpXS5wb3MueCAmJiBuZWlnaGJvdXIucG9zLnkgPT09IG5vZGVzW2ldLnBvcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaXNQb2ludEVxdWFsID0gKHBvaW50QSwgcG9pbnRCKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwb2ludEEueCA9PT0gcG9pbnRCLnggJiYgcG9pbnRBLnkgPT09IHBvaW50Qi55KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcig0MCwgMzYsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMud29ybGQgPSBuZXcgV29ybGQoeyB4OiA3MCwgeTogNDggfSk7XHJcbiAgICAgICAgdGhpcy53b3JsZC5jcmVhdGVXb3JsZCgpO1xyXG4gICAgICAgIC8vIEVtaXR0ZXJzXHJcbiAgICAgICAgdGhpcy5lbWl0dGVycy5wdXNoKG5ldyBFbWl0dGVyKG5ldyBQb2ludCgwLCAwKSwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlcnMucHVzaChuZXcgRW1pdHRlcihuZXcgUG9pbnQoMTcsIDApLCB0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVycy5wdXNoKG5ldyBFbWl0dGVyKG5ldyBQb2ludCgzNSwgMCksIHRoaXMpKTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXJzLnB1c2gobmV3IEVtaXR0ZXIobmV3IFBvaW50KDY5LCAwKSwgdGhpcykpO1xyXG4gICAgICAgIC8vIEJ1aWxkaW5nc1xyXG4gICAgICAgIHRoaXMuYnVpbGRpbmdzLnB1c2godGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIC8vIENvbGxlY3RvciBpcyBhbHJlYWR5IGJ1aWx0XHJcbiAgICAgICAgdGhpcy5hZGRCdWlsZGluZyhuZXcgUG9pbnQoNDIsIDI5KSwgRUJ1aWxkaW5nLkNvbGxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5idWlsZGluZ3NbMV0uYnVpbHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnVpbGRpbmdzWzFdLmhlYWx0aCA9IHRoaXMuYnVpbGRpbmdzWzFdLm1heEhlYWx0aDtcclxuICAgICAgICB0aGlzLmFkZEJ1aWxkaW5nKG5ldyBQb2ludCg5LCA1KSwgRUJ1aWxkaW5nLlN0YWJpbGl6ZXIpO1xyXG4gICAgICAgIHRoaXMuYWRkQnVpbGRpbmcobmV3IFBvaW50KDM3LCA0KSwgRUJ1aWxkaW5nLlN0YWJpbGl6ZXIpO1xyXG4gICAgICAgIHRoaXMuYWRkQnVpbGRpbmcobmV3IFBvaW50KDU5LCAxNyksIEVCdWlsZGluZy5TdGFiaWxpemVyKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5JbkdhbWU7XHJcbiAgICAgICAgLy8gY2xvY2tzXHJcbiAgICAgICAgbmV3IFVwZGF0ZUdhbWVTdGF0ZSh0aGlzKTtcclxuICAgICAgICBuZXcgQ3JlZXBlclVwZGF0ZSh0aGlzKTtcclxuICAgICAgICBuZXcgVXBkYXRlQnVpbGRpZ25zKHRoaXMpO1xyXG4gICAgICAgIG5ldyBVcGRhdGVQcm9qZWN0aWxlcyh0aGlzKTtcclxuICAgICAgICBuZXcgVXBkYXRlcGFja2V0UXVldWUodGhpcyk7XHJcbiAgICAgICAgbmV3IFVwZGF0ZVBhY2tldHModGhpcyk7XHJcbiAgICB9XHJcbiAgICBhZGRCdWlsZGluZyhwb3MsIHR5cGUpIHtcclxuICAgICAgICBsZXQgYnVpbGQgPSBudWxsO1xyXG4gICAgICAgIC8vIGJ1aWxkaW5ncyBjYW4gYmUgYnVpbHRcclxuICAgICAgICBpZiAoIXRoaXMuYnVpbGRpbmdDYW5CZVBsYWNlZChwb3MpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnVpbGRpbmcgY2FudCBiZSBwbGFjZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRUJ1aWxkaW5nLkNvbGxlY3RvcjpcclxuICAgICAgICAgICAgICAgIGJ1aWxkID0gbmV3IENvbGxlY3Rvcihwb3MsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRUJ1aWxkaW5nLkJsYXN0ZXI6XHJcbiAgICAgICAgICAgICAgICBidWlsZCA9IG5ldyBCbGFzdGVyKHBvcywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFQnVpbGRpbmcuU3RhYmlsaXplcjpcclxuICAgICAgICAgICAgICAgIGJ1aWxkID0gbmV3IFN0YWJpbGl6ZXIocG9zLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidWlsZCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYnVpbGRpbmdzLnB1c2goYnVpbGQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29ubmVjdGlvbnMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBidWlsZGluZyBoYXMgYmVlbiBwbGFjZWQgYXQ6IFwiICsgcG9zLnggKyBcIiBcIiArIHBvcy55KTtcclxuICAgIH1cclxuICAgIGdldE5laWdoYm91ckJ1aWxkaW5ncyhub2RlLCB0YXJnZXQpIHtcclxuICAgICAgICBsZXQgbmVpZ2hib3VycyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWlsZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCEobm9kZS5wb3MueCA9PT0gdGhpcy5idWlsZGluZ3NbaV0ucG9zLnggJiYgbm9kZS5wb3MueSA9PT0gdGhpcy5idWlsZGluZ3NbaV0ucG9zLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpdCBtdXN0IGVpdGhlciBiZSB0aGUgdGFyZ2V0IG9yIGJlIGJ1aWx0IG9yIHRhcmdldCB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1aWxkaW5nc1tpXSA9PT0gdGFyZ2V0IHx8IHRoaXMuYnVpbGRpbmdzW2ldLmJ1aWx0IHx8IHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1aWxkaW5nQ2VudGVyID0gdGhpcy5idWlsZGluZ3NbaV0uZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVDZW50ZXIgPSBub2RlLmdldENlbnRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gZGlzdGFuY2Uobm9kZUNlbnRlciwgYnVpbGRpbmdDZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heERpc3RhbmNlID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8PSBtYXhEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy5idWlsZGluZ3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmFkZChuZXcgQ29ubmVjdGlvbihub2RlQ2VudGVyLCBidWlsZGluZ0NlbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmVpZ2hib3VycztcclxuICAgIH1cclxuICAgIHVwZGF0ZUNvbm5lY3Rpb25zKCkge1xyXG4gICAgICAgIGxldCBuZWlnaGJvdXJzID0gW107XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsQ29ubmVjdGlvbnModGhpcy5wbGF5ZXIsIG5laWdoYm91cnMpO1xyXG4gICAgICAgIC8vIHNldCB0aGUgY29ubmVjdGVkIGJ1aWxkaW5ncyB0byBjb25uZWN0ZWRcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm91cnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYnVpbGRpbmcgPSBuZWlnaGJvdXJzW2ldO1xyXG4gICAgICAgICAgICBidWlsZGluZy5jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoYnVpbGRpbmcgaW5zdGFuY2VvZiBDb2xsZWN0b3IgJiYgYnVpbGRpbmcuYnVpbHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sbGVjdGlvbkZpZWxkcyhidWlsZGluZywgVXBkYXRlQWN0aW9uLkFkZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRBbGxDb25uZWN0aW9ucyhub2RlLCBuZWlnaGJvdXJzKSB7XHJcbiAgICAgICAgbGV0IG5vZGVOZWlnaGJvdXJzID0gdGhpcy5nZXROZWlnaGJvdXJCdWlsZGluZ3Mobm9kZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIW5laWdoYm91cnMuaW5jbHVkZXMobm9kZU5laWdoYm91cnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2gobm9kZU5laWdoYm91cnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxDb25uZWN0aW9ucyhub2RlTmVpZ2hib3Vyc1tpXSwgbmVpZ2hib3Vycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDb2xsZWN0aW9uRmllbGRzKG5vZGUsIGFjdGlvbikge1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLndvcmxkLnRpbGVzW25vZGUucG9zLnhdW25vZGUucG9zLnldLmhlaWdodDtcclxuICAgICAgICBmb3IgKGxldCBpID0gLTI7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IC0yOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gbmV3IFBvaW50KG5vZGUucG9zLnggKyBpLCBub2RlLnBvcy55ICsgaik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53b3JsZC53aXRoaW5Xb3JsZChjdXJyZW50UG9zLngsIGN1cnJlbnRQb3MueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gdGhpcy53b3JsZC50aWxlc1tjdXJyZW50UG9zLnhdW2N1cnJlbnRQb3MueV0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGhpbiByYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWlnaHQgPT09IGN1cnJlbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gVXBkYXRlQWN0aW9uLkFkZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JsZC50aWxlc1tjdXJyZW50UG9zLnhdW2N1cnJlbnRQb3MueV0uY29sbGVjdG9yID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ybGQudGlsZXNbY3VycmVudFBvcy54XVtjdXJyZW50UG9zLnldLmNvbGxlY3RvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4aW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWlsZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVpbGRpbmcgPSB0aGlzLmJ1aWxkaW5nc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1aWxkaW5nIGluc3RhbmNlb2YgQ29sbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYkhlaWdodCA9IHRoaXMud29ybGQudGlsZXNbYnVpbGRpbmcucG9zLnhdW2J1aWxkaW5nLnBvcy55XS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRJc0luUmFuZ2UoY3VycmVudFBvcywgYnVpbGRpbmcucG9zLCA2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiSGVpZ2h0ID09PSBjdXJyZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ybGQudGlsZXNbY3VycmVudFBvcy54XVtjdXJyZW50UG9zLnldLmNvbGxlY3RvciA9IGJ1aWxkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHF1ZXVlUGFja2V0KHRhcmdldCwgdHlwZSkge1xyXG4gICAgICAgIGxldCBwYWNrZXQgPSBuZXcgUGFja2V0KHRoaXMucGxheWVyLmdldENlbnRlcigpLCB0YXJnZXQsIHR5cGUsIHRoaXMpO1xyXG4gICAgICAgIHBhY2tldC5jdXJyZW50VGFyZ2V0ID0gdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5maW5kUm91dGUocGFja2V0KTtcclxuICAgICAgICBpZiAocGFja2V0LmN1cnJlbnRUYXJnZXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFBhY2tldFR5cGUuSGVhbHRoKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmhlYWx0aFJlcXVlc3RzKys7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBQYWNrZXRUeXBlLkVuZXJneSlcclxuICAgICAgICAgICAgICAgIHRhcmdldC5lbmVyZ3lSZXF1ZXN0cysrO1xyXG4gICAgICAgICAgICB0aGlzLnBhY2tldFF1ZXVlLnB1c2gocGFja2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidWlsZGluZ0NhbkJlUGxhY2VkKHBvcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWlsZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYnVpbGRpbmcgPSB0aGlzLmJ1aWxkaW5nc1tpXTtcclxuICAgICAgICAgICAgaWYgKHBvcy54ID49IGJ1aWxkaW5nLnBvcy54ICYmIHBvcy55ID49IGJ1aWxkaW5nLnBvcy55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zLnggPCBidWlsZGluZy5wb3MueCArIGJ1aWxkaW5nLnNpemUgJiYgcG9zLnkgPCBidWlsZGluZy5wb3MueSArIGJ1aWxkaW5nLnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGlzdGFuY2UsIFVwZGF0ZUFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXIvSGVscGVyXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vaGVscGVyL1BvaW50XCI7XHJcbmltcG9ydCB7IENvbGxlY3RvciB9IGZyb20gXCIuL0NvbGxlY3RvclwiO1xyXG5leHBvcnQgdmFyIFBhY2tldFR5cGU7XHJcbihmdW5jdGlvbiAoUGFja2V0VHlwZSkge1xyXG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiSGVhbHRoXCJdID0gMF0gPSBcIkhlYWx0aFwiO1xyXG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRW5lcmd5XCJdID0gMV0gPSBcIkVuZXJneVwiO1xyXG59KShQYWNrZXRUeXBlIHx8IChQYWNrZXRUeXBlID0ge30pKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFja2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgdGFyZ2V0LCB0eXBlLCBnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICAvLyBjdXJyZW50VGFyZ2V0IHNob3VsZCBub3QgYmUgbnVsbCB3aGVuIG1vdmVkXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlbW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FsU3BlZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXJnZXRDZW50ZXIgPSAoX2EgPSB0aGlzLmN1cnJlbnRUYXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRDZW50ZXIoKTtcclxuICAgICAgICAgICAgbGV0IGRlbHRhID0gbmV3IFBvaW50KGN1cnJlbnRUYXJnZXRDZW50ZXIueCAtIHRoaXMucG9zLngsIGN1cnJlbnRUYXJnZXRDZW50ZXIueSAtIHRoaXMucG9zLnkpO1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IGRpc3RhbmNlKHRoaXMucG9zLCBjdXJyZW50VGFyZ2V0Q2VudGVyKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZC54ID0gKGRlbHRhLnggLyBkaXN0KSAqIFBhY2tldC5iYXNlU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQueSA9IChkZWx0YS55IC8gZGlzdCkgKiBQYWNrZXQuYmFzZVNwZWVkO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zcGVlZC54KSA+IE1hdGguYWJzKGRlbHRhLngpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZC54ID0gZGVsdGEueDtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc3BlZWQueSkgPiBNYXRoLmFicyhkZWx0YS55KSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQueSA9IGRlbHRhLnk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsU3BlZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MueCArPSB0aGlzLnNwZWVkLng7XHJcbiAgICAgICAgICAgIHRoaXMucG9zLnkgKz0gdGhpcy5zcGVlZC55O1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudENlbnRlclRhcmdldCA9IHRoaXMuY3VycmVudFRhcmdldC5nZXRDZW50ZXIoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zLnggPCBjdXJyZW50Q2VudGVyVGFyZ2V0LnggKyAwLjEgJiYgdGhpcy5wb3MueCA+IGN1cnJlbnRDZW50ZXJUYXJnZXQueCAtIDAuMSAmJiB0aGlzLnBvcy55IDwgY3VycmVudENlbnRlclRhcmdldC55ICsgMC4xICYmIHRoaXMucG9zLnkgPiBjdXJyZW50Q2VudGVyVGFyZ2V0LnkgLSAwLjEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zLnggPSBjdXJyZW50Q2VudGVyVGFyZ2V0Lng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcy55ID0gY3VycmVudENlbnRlclRhcmdldC55O1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBpcyByZWFjaGVkXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0ID09PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHRhcmdldCBidWlsZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFBhY2tldFR5cGUuSGVhbHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmhlYWx0aCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5oZWFsdGhSZXF1ZXN0cy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXQuaGVhbHRoID49IHRoaXMudGFyZ2V0Lm1heEhlYWx0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuaGVhbHRoID0gdGhpcy50YXJnZXQubWF4SGVhbHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5idWlsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmJ1aWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXQgaW5zdGFuY2VvZiBDb2xsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnVwZGF0ZUNvbGxlY3Rpb25GaWVsZHModGhpcy50YXJnZXQsIFVwZGF0ZUFjdGlvbi5BZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09IFBhY2tldFR5cGUuRW5lcmd5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmVuZXJneSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5lbmVyZ3lSZXF1ZXN0cy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXQuZW5lcmd5ID4gdGhpcy50YXJnZXQubWF4RW5lcmd5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuZW5lcmd5ID0gdGhpcy50YXJnZXQubWF4RW5lcmd5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5maW5kUm91dGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIH1cclxufVxyXG5QYWNrZXQuYmFzZVNwZWVkID0gMC4yO1xyXG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2hlbHBlci9Qb2ludFwiO1xyXG5pbXBvcnQgQnVpbGRpbmcgZnJvbSBcIi4vQnVpbGRpbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQnVpbGRpbmcge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKG5ldyBQb2ludCh4LCB5KSwgZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSA0MDtcclxuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IDQwO1xyXG4gICAgICAgIHRoaXMuZW5lcmd5ID0gMTA7XHJcbiAgICAgICAgdGhpcy5tYXhFbmVyZ3kgPSA0MDtcclxuICAgICAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNpemUgPSA1O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGRpc3RhbmNlIH0gZnJvbSBcIi4uL2hlbHBlci9IZWxwZXJcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9oZWxwZXIvUG9pbnRcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdGlsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHRhcmdldFBvcywgcm90YXRpb24pIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb3MgPSB0YXJnZXRQb3M7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgY2FsU3BlZWQoKSB7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gbmV3IFBvaW50KHRoaXMudGFyZ2V0UG9zLnggLSB0aGlzLnBvcy54LCB0aGlzLnRhcmdldFBvcy55IC0gdGhpcy5wb3MueSk7XHJcbiAgICAgICAgbGV0IGRpc3QgPSBkaXN0YW5jZSh0aGlzLnBvcywgdGhpcy50YXJnZXRQb3MpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQueCA9IChkZWx0YS54IC8gZGlzdCkgKiBQcm9qZWN0aWxlLmJhc2VTcGVlZDtcclxuICAgICAgICB0aGlzLnNwZWVkLnkgPSAoZGVsdGEueSAvIGRpc3QpICogUHJvamVjdGlsZS5iYXNlU3BlZWQ7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc3BlZWQueCkgPiBNYXRoLmFicyhkZWx0YS54KSlcclxuICAgICAgICAgICAgdGhpcy5zcGVlZC54ID0gZGVsdGEueDtcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zcGVlZC55KSA+IE1hdGguYWJzKGRlbHRhLnkpKVxyXG4gICAgICAgICAgICB0aGlzLnNwZWVkLnkgPSBkZWx0YS55O1xyXG4gICAgfVxyXG4gICAgbW92ZShnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jYWxTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMucG9zLnggKz0gdGhpcy5zcGVlZC54O1xyXG4gICAgICAgIHRoaXMucG9zLnkgKz0gdGhpcy5zcGVlZC55O1xyXG4gICAgICAgIGlmICh0aGlzLnBvcy54IDwgdGhpcy50YXJnZXRQb3MueCArIDIgJiYgdGhpcy5wb3MueCA+IHRoaXMudGFyZ2V0UG9zLnggLSAyICYmIHRoaXMucG9zLnkgPCB0aGlzLnRhcmdldFBvcy55ICsgMiAmJiB0aGlzLnBvcy55ID4gdGhpcy50YXJnZXRQb3MueSAtIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBnYW1lLndvcmxkLnRpbGVzW3RoaXMudGFyZ2V0UG9zLnhdW3RoaXMudGFyZ2V0UG9zLnldLmNyZWVwIC09IDE7XHJcbiAgICAgICAgICAgIGlmIChnYW1lLndvcmxkLnRpbGVzW3RoaXMudGFyZ2V0UG9zLnhdW3RoaXMudGFyZ2V0UG9zLnldLmNyZWVwIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS53b3JsZC50aWxlc1t0aGlzLnRhcmdldFBvcy54XVt0aGlzLnRhcmdldFBvcy55XS5jcmVlcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuUHJvamVjdGlsZS5iYXNlU3BlZWQgPSAyO1xyXG4iLCJpbXBvcnQgQnVpbGRpbmcgZnJvbSBcIi4vQnVpbGRpbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhYmlsaXplciBleHRlbmRzIEJ1aWxkaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKHBvcywgZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSAyMDtcclxuICAgICAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNpemUgPSAxO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBCbGFzdGVyIGZyb20gXCIuLi9jaGFycy9CbGFzdGVyXCI7XHJcbmltcG9ydCB7IENvbGxlY3RvciB9IGZyb20gXCIuLi9jaGFycy9Db2xsZWN0b3JcIjtcclxuaW1wb3J0IFN0YWJpbGl6ZXIgZnJvbSBcIi4uL2NoYXJzL1N0YWJpbGl6ZXJcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL2hlbHBlci9IZWxwZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlQnVpbGRpZ25zIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT09IEdhbWVTdGF0ZS5JbkdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnVpbGRpbmdzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBpbmdhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnVpbGRpbmdzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZS5idWlsZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkaW5nID0gdGhpcy5nYW1lLmJ1aWxkaW5nc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChidWlsZGluZy5jb25uZWN0ZWQgJiYgYnVpbGRpbmcgIT09IHRoaXMuZ2FtZS5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWlsZGluZy5yZXF1ZXN0UGFja2V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVpbGRpbmcgaW5zdGFuY2VvZiBDb2xsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWlsZGluZy5jb2xsZWN0RW5lcmd5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVpbGRpbmcgaW5zdGFuY2VvZiBCbGFzdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRpbmcudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0YWtlIG5vIGRhbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKCEoYnVpbGRpbmcgaW5zdGFuY2VvZiBTdGFiaWxpemVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nLnRha2VEYW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL2hlbHBlci9IZWxwZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlZXBlclVwZGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09PSBHYW1lU3RhdGUuSW5HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNyZWVwZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IGluZ2FtZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVDcmVlcGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXJDb3VudGVyKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVtaXR0ZXJDb3VudGVyID49IDIwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduSW5DcmVlcGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXJDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZS53b3JsZC5kaW1lbnNpb25zLng7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy55OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUud29ybGQudGlsZXNbaV1bal0ubmV3Y3JlZXAgPSB0aGlzLmdhbWUud29ybGQudGlsZXNbaV1bal0uY3JlZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jcmVlcGVyQ291bnRlcisrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jcmVlcGVyQ291bnRlciA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWVwZXJDb3VudGVyIC09IDIwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy54OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2FtZS53b3JsZC5kaW1lbnNpb25zLnk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByaWdodCBzaWRlIG5laWdoYm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHRoaXMuZ2FtZS53b3JsZC5kaW1lbnNpb25zLngpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJDcmVlcCh0aGlzLmdhbWUud29ybGQudGlsZXNbaV1bal0sIHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpICsgMV1bal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxlZnQgc2lkZSBuZWlnaGJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckNyZWVwKHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXSwgdGhpcy5nYW1lLndvcmxkLnRpbGVzW2kgLSAxXVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9wIHNpZGUgbmVpZ2hib3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogKyAxIDwgdGhpcy5nYW1lLndvcmxkLmRpbWVuc2lvbnMueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckNyZWVwKHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXSwgdGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2ogKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9uIHNpZGUgbmVpZ2hib3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogLSAxID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJDcmVlcCh0aGlzLmdhbWUud29ybGQudGlsZXNbaV1bal0sIHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gLy8gcHV0IHRoZSB2YWx1ZXMgYmFjayB0byBkcmF3IGFuZCBmaXggdGhlIGNyZWVwIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy54OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2FtZS53b3JsZC5kaW1lbnNpb25zLnk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2pdLm5ld2NyZWVwID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXS5uZXdjcmVlcCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXS5uZXdjcmVlcCA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2pdLm5ld2NyZWVwID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUud29ybGQudGlsZXNbaV1bal0uY3JlZXAgPSB0aGlzLmdhbWUud29ybGQudGlsZXNbaV1bal0ubmV3Y3JlZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRyYW5zZmVyQ3JlZXAgPSAoc291cmNlLCB0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyYW5mZXJSYXRlID0gMC4yO1xyXG4gICAgICAgICAgICBpZiAoc291cmNlLmhlaWdodCA+IC0xICYmIHRhcmdldC5oZWlnaHQgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5jcmVlcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc291cmNlVG90YWwgPSBzb3VyY2UuaGVpZ2h0ICsgc291cmNlLmNyZWVwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRUb3RhbCA9IHRhcmdldC5oZWlnaHQgKyB0YXJnZXQuY3JlZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlVG90YWwgPiB0YXJnZXRUb3RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IHNvdXJjZVRvdGFsIC0gdGFyZ2V0VG90YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA+IHNvdXJjZS5jcmVlcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gc291cmNlLmNyZWVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRqdXN0ZWREZWx0YSA9IGRlbHRhICogdHJhbmZlclJhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5uZXdjcmVlcCAtPSBhZGp1c3RlZERlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQubmV3Y3JlZXAgKz0gYWRqdXN0ZWREZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3Bhd25JbkNyZWVwZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLmVtaXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZW1pdHRlcnNbaV0uc3Bhd25DcmVlcGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jcmVlcGVyQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyQ291bnRlciA9IDA7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUsIDEpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTdGFiaWxpemVyIGZyb20gXCIuLi9jaGFycy9TdGFiaWxpemVyXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuLi9oZWxwZXIvSGVscGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVHYW1lU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ2FtZVdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLmJ1aWxkaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5idWlsZGluZ3NbaV0gaW5zdGFuY2VvZiBTdGFiaWxpemVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5idWlsZGluZ3NbaV0uaGVhbHRoICE9PSB0aGlzLmdhbWUuYnVpbGRpbmdzW2ldLm1heEhlYWx0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lV29uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnYW1lV29uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLldvbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGhhdmUgd29uIHRoZSBnYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUucGxheWVyLmhlYWx0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5Mb3N0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBsb3N0IHRoZSBnYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlLCAxKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vaGVscGVyL0hlbHBlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVwYWNrZXRRdWV1ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09PSBHYW1lU3RhdGUuSW5HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRQYWNrZXRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBpbmdhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZFBhY2tldHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLnBhY2tldFF1ZXVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLnBsYXllci5lbmVyZ3kgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXllci5lbmVyZ3ktLTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFja2V0ID0gdGhpcy5nYW1lLnBhY2tldFF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhY2tldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wYWNrZXRzLmFkZChwYWNrZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgMTAwKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vaGVscGVyL0hlbHBlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVQYWNrZXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lU3RhdGUgPT09IEdhbWVTdGF0ZS5JbkdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVBhY2tldHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IGluZ2FtZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlUGFja2V0cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnBhY2tldHMuZm9yRWFjaChwYWNrZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5yZW1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGFja2V0cy5kZWxldGUocGFja2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhY2tldC5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgMjAwKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vaGVscGVyL0hlbHBlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVQcm9qZWN0aWxlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZVN0YXRlID09PSBHYW1lU3RhdGUuSW5HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVQcm9qZWN0aWxlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgaW5nYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVQcm9qZWN0aWxlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlbW92ZUlkID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLnByb2plY3RpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0aWxlID0gdGhpcy5nYW1lLnByb2plY3RpbGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RpbGUucmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWQucHVzaChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb2plY3RpbGUubW92ZSh0aGlzLmdhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBwcm9qZWN0aWxlcyB0b2RvIG1heWJlIGRvZXNudCB3b3JrXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlSWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wcm9qZWN0aWxlcy5zcGxpY2UocmVtb3ZlSWRbaV0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlLCAxMDApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbGxlY3RvciB9IGZyb20gXCIuLi9jaGFycy9Db2xsZWN0b3JcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vY2hhcnMvUGxheWVyXCI7XHJcbmltcG9ydCBCbGFzdGVyIGZyb20gXCIuLi9jaGFycy9CbGFzdGVyXCI7XHJcbmltcG9ydCB7IFBhY2tldFR5cGUgfSBmcm9tIFwiLi4vY2hhcnMvUGFja2V0XCI7XHJcbmltcG9ydCBTdGFiaWxpemVyIGZyb20gXCIuLi9jaGFycy9TdGFiaWxpemVyXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vaGVscGVyL1BvaW50XCI7XHJcbmNvbnN0IFBsYXllclBhdGggPSByZXF1aXJlKFwiLi4vaW1nL1BsYXllci5wbmdcIik7XHJcbmNvbnN0IENvbGxlY3RvclBhdGggPSByZXF1aXJlKFwiLi4vaW1nL0NvbGxlY3Rvci5wbmdcIik7XHJcbmNvbnN0IEVtaXR0ZXJQYXRoID0gcmVxdWlyZShcIi4uL2ltZy9FbWl0dGVyLnBuZ1wiKTtcclxuY29uc3QgQ3JlZXBlclBhdGggPSByZXF1aXJlKFwiLi4vaW1nL0NyZWVwZXIucG5nXCIpO1xyXG5jb25zdCBCbGFzdGVyUGF0aCA9IHJlcXVpcmUoXCIuLi9pbWcvQmxhc3Rlci5wbmdcIik7XHJcbmNvbnN0IFN0YWJpbGl6ZXJQYXRoID0gcmVxdWlyZShcIi4uL2ltZy9TdGFiaWxpemVyLnBuZ1wiKTtcclxuY29uc3QgUGxheWVySW1nID0gbmV3IEltYWdlKCk7XHJcblBsYXllckltZy5zcmMgPSBQbGF5ZXJQYXRoO1xyXG5jb25zdCBDb2xsZWN0b3JJbWcgPSBuZXcgSW1hZ2UoKTtcclxuQ29sbGVjdG9ySW1nLnNyYyA9IENvbGxlY3RvclBhdGg7XHJcbmNvbnN0IEVtaXR0ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcclxuRW1pdHRlckltZy5zcmMgPSBFbWl0dGVyUGF0aDtcclxuY29uc3QgQ3JlZXBlckltZyA9IG5ldyBJbWFnZSgpO1xyXG5DcmVlcGVySW1nLnNyYyA9IENyZWVwZXJQYXRoO1xyXG5jb25zdCBCbGFzdGVySW1nID0gbmV3IEltYWdlKCk7XHJcbkJsYXN0ZXJJbWcuc3JjID0gQmxhc3RlclBhdGg7XHJcbmNvbnN0IFN0YWJpbGl6ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcclxuU3RhYmlsaXplckltZy5zcmMgPSBTdGFiaWxpemVyUGF0aDtcclxuY29uc3QgZW1pdHRlclNpemUgPSAxO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3TWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3U2hhZG93cyA9IChwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCwgcG9zKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC50aWxlc1twb3MueF1bcG9zLnldLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmcuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud29ybGQud2l0aGluV29ybGQocG9zLnggKyAxLCBwb3MueSkgJiYgaGVpZ2h0ID4gdGhpcy5nYW1lLndvcmxkLnRpbGVzW3Bvcy54ICsgMV1bcG9zLnldLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLm1vdmVUbygocG9zLnggKyAxKSAqIHBpeGVsV2lkdGgsIHBvcy55ICogcGl4ZWxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmxpbmVUbygocG9zLnggKyAxKSAqIHBpeGVsV2lkdGgsIHBvcy55ICogcGl4ZWxIZWlnaHQgKyBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmcuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53b3JsZC53aXRoaW5Xb3JsZChwb3MueCAtIDEsIHBvcy55KSAmJiBoZWlnaHQgPiB0aGlzLmdhbWUud29ybGQudGlsZXNbcG9zLnggLSAxXVtwb3MueV0uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmcubW92ZVRvKHBvcy54ICogcGl4ZWxXaWR0aCAtIDEsIHBvcy55ICogcGl4ZWxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmxpbmVUbyhwb3MueCAqIHBpeGVsV2lkdGggLSAxLCBwb3MueSAqIHBpeGVsSGVpZ2h0ICsgcGl4ZWxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud29ybGQud2l0aGluV29ybGQocG9zLngsIHBvcy55ICsgMSkgJiYgaGVpZ2h0ID4gdGhpcy5nYW1lLndvcmxkLnRpbGVzW3Bvcy54XVtwb3MueSArIDFdLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLm1vdmVUbyhwb3MueCAqIHBpeGVsV2lkdGgsIChwb3MueSArIDEpICogcGl4ZWxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmxpbmVUbyhwb3MueCAqIHBpeGVsV2lkdGggKyBwaXhlbFdpZHRoLCAocG9zLnkgKyAxKSAqIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZy5zdHJva2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLndvcmxkLndpdGhpbldvcmxkKHBvcy54LCBwb3MueSAtIDEpICYmIGhlaWdodCA+IHRoaXMuZ2FtZS53b3JsZC50aWxlc1twb3MueF1bcG9zLnkgLSAxXS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZy5tb3ZlVG8ocG9zLnggKiBwaXhlbFdpZHRoLCBwb3MueSAqIHBpeGVsSGVpZ2h0IC0gMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmcubGluZVRvKHBvcy54ICogcGl4ZWxXaWR0aCArIHBpeGVsV2lkdGgsIHBvcy55ICogcGl4ZWxIZWlnaHQgLSAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZy5zdHJva2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kcmF3QnVpbGRpbmdzID0gKHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYnVpbGRpbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWlsZGluZyA9IHRoaXMuZ2FtZS5idWlsZGluZ3NbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdIZWFsdGhCYXIocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQsIGJ1aWxkaW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0VuZXJneUJhcihwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCwgYnVpbGRpbmcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFidWlsZGluZy5idWlsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZy5maWx0ZXIgPSBcImdyYXlzY2FsZSgxKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1aWxkaW5nIGluc3RhbmNlb2YgQ29sbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmRyYXdJbWFnZShDb2xsZWN0b3JJbWcsIGJ1aWxkaW5nLnBvcy54ICogcGl4ZWxXaWR0aCwgYnVpbGRpbmcucG9zLnkgKiBwaXhlbEhlaWdodCwgYnVpbGRpbmcuc2l6ZSAqIHBpeGVsV2lkdGgsIGJ1aWxkaW5nLnNpemUgKiBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChidWlsZGluZyBpbnN0YW5jZW9mIEJsYXN0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmcuZHJhd0ltYWdlKEJsYXN0ZXJJbWcsIGJ1aWxkaW5nLnBvcy54ICogcGl4ZWxXaWR0aCwgYnVpbGRpbmcucG9zLnkgKiBwaXhlbEhlaWdodCwgYnVpbGRpbmcuc2l6ZSAqIHBpeGVsV2lkdGgsIGJ1aWxkaW5nLnNpemUgKiBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChidWlsZGluZyBpbnN0YW5jZW9mIFN0YWJpbGl6ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmcuZHJhd0ltYWdlKFN0YWJpbGl6ZXJJbWcsIGJ1aWxkaW5nLnBvcy54ICogcGl4ZWxXaWR0aCwgYnVpbGRpbmcucG9zLnkgKiBwaXhlbEhlaWdodCwgYnVpbGRpbmcuc2l6ZSAqIHBpeGVsV2lkdGgsIGJ1aWxkaW5nLnNpemUgKiBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChidWlsZGluZyBpbnN0YW5jZW9mIFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZy5kcmF3SW1hZ2UoUGxheWVySW1nLCB0aGlzLmdhbWUucGxheWVyLnBvcy54ICogcGl4ZWxXaWR0aCwgdGhpcy5nYW1lLnBsYXllci5wb3MueSAqIHBpeGVsSGVpZ2h0LCB0aGlzLmdhbWUucGxheWVyLnNpemUgKiBwaXhlbFdpZHRoLCB0aGlzLmdhbWUucGxheWVyLnNpemUgKiBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNhbnQgZHJhdyB0aGlzIGJ1aWxkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmZpbHRlciA9IFwiZ3JheXNjYWxlKDApXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZHJhd0hlYWx0aEJhciA9IChwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCwgYnVpbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoYnVpbGQuaGVhbHRoIDwgYnVpbGQubWF4SGVhbHRoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFyUG9zWSA9IGJ1aWxkLnBvcy55ICogcGl4ZWxIZWlnaHQgKyBwaXhlbEhlaWdodCAqIGJ1aWxkLnNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmcuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmcuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmZpbGxSZWN0KGJ1aWxkLnBvcy54ICogcGl4ZWxXaWR0aCwgYmFyUG9zWSwgcGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQgLyAzKTtcclxuICAgICAgICAgICAgICAgIGxldCBiYXJXaWR0aCA9IHBpeGVsV2lkdGggKiBidWlsZC5zaXplIC8gYnVpbGQubWF4SGVhbHRoICogYnVpbGQuaGVhbHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZy5maWxsUmVjdChidWlsZC5wb3MueCAqIHBpeGVsV2lkdGgsIGJhclBvc1ksIGJhcldpZHRoLCBwaXhlbEhlaWdodCAvIDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRyYXdFbmVyZ3lCYXIgPSAocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQsIGJ1aWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGJ1aWxkIGluc3RhbmNlb2YgUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoYnVpbGQubWF4RW5lcmd5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZy5maWxsUmVjdChidWlsZC5wb3MueCAqIHBpeGVsV2lkdGgsIGJ1aWxkLnBvcy55ICogcGl4ZWxIZWlnaHQgLSBwaXhlbEhlaWdodCAvIDQsIHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFyV2lkdGggPSBwaXhlbFdpZHRoICogYnVpbGQuc2l6ZSAvIGJ1aWxkLm1heEVuZXJneSAqIGJ1aWxkLmVuZXJneTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZy5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZy5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nLmZpbGxSZWN0KGJ1aWxkLnBvcy54ICogcGl4ZWxXaWR0aCwgYnVpbGQucG9zLnkgKiBwaXhlbEhlaWdodCAtIHBpeGVsSGVpZ2h0IC8gNCwgYmFyV2lkdGgsIHBpeGVsSGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwaXhlbFdpZHRoID0gKHRoaXMud2lkdGggLyB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy54KTtcclxuICAgICAgICBsZXQgcGl4ZWxIZWlnaHQgPSAodGhpcy5oZWlnaHQgLyB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy55KTtcclxuICAgICAgICB0aGlzLmRyYXdUZXJhaW4ocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQpO1xyXG4gICAgICAgIC8vIGRyYXcgZW5lbXlcclxuICAgICAgICB0aGlzLmRyYXdFbWl0dGVyKHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRyYXdDcmVlcGVyKHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICAvLyBkcmF3IHBsYXllclxyXG4gICAgICAgIHRoaXMuZHJhd1JvdXRlcyhwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3QnVpbGRpbmdzKHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRyYXdQYWNrZXRzKHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRyYXdQcm9qZWN0aWxlKHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGRyYXdUZXJhaW4ocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKHRoaXMuZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy54OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy55OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2pdLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmcuZmlsbFN0eWxlID0gXCIjYmJhNmE1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZy5maWxsUmVjdChwaXhlbFdpZHRoICogaSwgcGl4ZWxIZWlnaHQgKiBqLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmcuZmlsbFN0eWxlID0gXCIjOTU4OTdlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZy5maWxsUmVjdChwaXhlbFdpZHRoICogaSwgcGl4ZWxIZWlnaHQgKiBqLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmcuZmlsbFN0eWxlID0gXCIjN2M2ZDY4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZy5maWxsUmVjdChwaXhlbFdpZHRoICogaSwgcGl4ZWxIZWlnaHQgKiBqLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXS5jb2xsZWN0b3IgJiYgKChfYSA9IHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXS5jb2xsZWN0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb25uZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZy5maWxsU3R5bGUgPSBcInJnYmEoMTI0LDI1MiwwLCAwLjIpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmZpbGxSZWN0KHBpeGVsV2lkdGggKiBpLCBwaXhlbEhlaWdodCAqIGosIHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NoYWRvd3MocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQsIG5ldyBQb2ludChpLCBqKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3Um91dGVzKHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUuY29ubmVjdGlvbnMuY29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0aGlzLmdhbWUuY29ubmVjdGlvbnMuY29ubmVjdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZy5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5nLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmcubW92ZVRvKHJvdXRlLmEueCAqIHBpeGVsV2lkdGgsIHJvdXRlLmEueSAqIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5nLmxpbmVUbyhyb3V0ZS5iLnggKiBwaXhlbFdpZHRoLCByb3V0ZS5iLnkgKiBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuZy5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmcuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZy5saW5lV2lkdGggPSAxO1xyXG4gICAgfVxyXG4gICAgZHJhd0VtaXR0ZXIocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQpIHtcclxuICAgICAgICBpZiAodGhpcy5nID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZS5lbWl0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjcmVlcGVyID0gdGhpcy5nYW1lLmVtaXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmcuZHJhd0ltYWdlKEVtaXR0ZXJJbWcsIGNyZWVwZXIucG9zLnggKiBwaXhlbFdpZHRoLCBjcmVlcGVyLnBvcy55ICogcGl4ZWxIZWlnaHQsIGVtaXR0ZXJTaXplICogcGl4ZWxXaWR0aCwgZW1pdHRlclNpemUgKiBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd0NyZWVwZXIocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQpIHtcclxuICAgICAgICBsZXQgY3JlcHBlclRpbGVTaXplID0gMTY7XHJcbiAgICAgICAgaWYgKHRoaXMuZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IC10aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy54OyBpIDw9IHRoaXMuZ2FtZS53b3JsZC5kaW1lbnNpb25zLng7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gLXRoaXMuZ2FtZS53b3JsZC5kaW1lbnNpb25zLng7IGogPD0gdGhpcy5nYW1lLndvcmxkLmRpbWVuc2lvbnMueTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLndvcmxkLndpdGhpbldvcmxkKGksIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA5OyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53b3JsZC50aWxlc1tpXVtqXS5jcmVlcCA+IGspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCB1cCA9IDAsIGRvd24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgLSAxIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLndvcmxkLnRpbGVzW2kgLSAxXVtqXS5jcmVlcCA+IGsgfHwgdGhpcy5nYW1lLndvcmxkLnRpbGVzW2kgLSAxXVtqXS5oZWlnaHQgPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA+IHRoaXMuZ2FtZS53b3JsZC5kaW1lbnNpb25zLnggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLndvcmxkLnRpbGVzW2kgKyAxXVtqXS5jcmVlcCA+IGsgfHwgdGhpcy5nYW1lLndvcmxkLnRpbGVzW2kgKyAxXVtqXS5oZWlnaHQgPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiAtIDEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2ogLSAxXS5jcmVlcCA+IGsgfHwgdGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2ogLSAxXS5oZWlnaHQgPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiArIDEgPiB0aGlzLmdhbWUud29ybGQuZGltZW5zaW9ucy55IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2ogKyAxXS5jcmVlcCA+IGsgfHwgdGhpcy5nYW1lLndvcmxkLnRpbGVzW2ldW2ogKyAxXS5oZWlnaHQgPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3duID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluZGV4IG9mIHRoZSBJbWFnZXMgaW1hZ2UgMSBpcyByaWdodCBpbWFnZSAyIGlzIHVwIGltYWdlIDQgaXMgbGVmdCBpbWFnZSA4IGlzIGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICg4ICogZG93bikgKyAoNCAqIGxlZnQpICsgKDIgKiB1cCkgKyByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZy5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZy5kcmF3SW1hZ2UoQ3JlZXBlckltZywgaW5kZXggKiBjcmVwcGVyVGlsZVNpemUsIDAsIGNyZXBwZXJUaWxlU2l6ZSwgY3JlcHBlclRpbGVTaXplLCBwaXhlbFdpZHRoICogaSwgcGl4ZWxIZWlnaHQgKiBqLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3UHJvamVjdGlsZShwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCkge1xyXG4gICAgICAgIGlmICh0aGlzLmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLnByb2plY3RpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RpbGUgPSB0aGlzLmdhbWUucHJvamVjdGlsZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZy5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5nLnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgdGhpcy5nLm1vdmVUbyhwcm9qZWN0aWxlLnBvcy54ICogcGl4ZWxXaWR0aCwgcHJvamVjdGlsZS5wb3MueSAqIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5nLmxpbmVUbyhwcm9qZWN0aWxlLnRhcmdldFBvcy54ICogcGl4ZWxXaWR0aCwgcHJvamVjdGlsZS50YXJnZXRQb3MueSAqIHBpeGVsSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5nLmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3UGFja2V0cyhwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCkge1xyXG4gICAgICAgIGlmICh0aGlzLmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IHBhY2tldCBvZiB0aGlzLmdhbWUucGFja2V0cykge1xyXG4gICAgICAgICAgICB0aGlzLmcuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5IZWFsdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmZpbGxTdHlsZSA9IFwiZ3JheVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkVuZXJneTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmcuZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBuZXcgUGFja2V0VHlwZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmcuYXJjKHBhY2tldC5wb3MueCAqIHBpeGVsV2lkdGgsIHBhY2tldC5wb3MueSAqIHBpeGVsSGVpZ2h0LCAzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHRoaXMuZy5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0V2lkdGhIZWlnaHQod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIHNldFJlbmRlckNvbnRleHQoZykge1xyXG4gICAgICAgIHRoaXMuZyA9IGc7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbm5lY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoYSwgYikge1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbnMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWRkID0gKG5ld0Nvbm5lY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5hLnggPT09IG5ld0Nvbm5lY3Rpb24uYS54ICYmIGNvbm5lY3Rpb24uYS55ID09PSBuZXdDb25uZWN0aW9uLmEueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmIueCA9PT0gbmV3Q29ubmVjdGlvbi5iLnggJiYgY29ubmVjdGlvbi5iLnkgPT09IG5ld0Nvbm5lY3Rpb24uYi55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uYS54ID09PSBuZXdDb25uZWN0aW9uLmIueCAmJiBjb25uZWN0aW9uLmEueSA9PT0gbmV3Q29ubmVjdGlvbi5iLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5iLnggPT09IG5ld0Nvbm5lY3Rpb24uYS54ICYmIGNvbm5lY3Rpb24uYi55ID09PSBuZXdDb25uZWN0aW9uLmEueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gobmV3Q29ubmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSBbXTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShwb2ludEEsIHBvaW50Qikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludEEueCAtIHBvaW50Qi54LCAyKSArIE1hdGgucG93KHBvaW50QS55IC0gcG9pbnRCLnksIDIpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRW50cnkobGlzdCkge1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaXN0Lmxlbmd0aCAtIDEpICsgMTtcclxuICAgIHJldHVybiBsaXN0W3JhbmRdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUFycmF5KGxpc3QpIHtcclxuICAgIGxldCBuZXdMaXN0ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXdMaXN0LnB1c2gobGlzdFtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3TGlzdDtcclxufVxyXG5leHBvcnQgdmFyIFVwZGF0ZUFjdGlvbjtcclxuKGZ1bmN0aW9uIChVcGRhdGVBY3Rpb24pIHtcclxuICAgIFVwZGF0ZUFjdGlvbltVcGRhdGVBY3Rpb25bXCJBZGRcIl0gPSAwXSA9IFwiQWRkXCI7XHJcbiAgICBVcGRhdGVBY3Rpb25bVXBkYXRlQWN0aW9uW1wiUmVtb3ZlXCJdID0gMV0gPSBcIlJlbW92ZVwiO1xyXG59KShVcGRhdGVBY3Rpb24gfHwgKFVwZGF0ZUFjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgR2FtZVN0YXRlO1xyXG4oZnVuY3Rpb24gKEdhbWVTdGF0ZSkge1xyXG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIkluR2FtZVwiXSA9IDBdID0gXCJJbkdhbWVcIjtcclxuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJXb25cIl0gPSAxXSA9IFwiV29uXCI7XHJcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiTG9zdFwiXSA9IDJdID0gXCJMb3N0XCI7XHJcbn0pKEdhbWVTdGF0ZSB8fCAoR2FtZVN0YXRlID0ge30pKTtcclxuZXhwb3J0IHZhciBFQnVpbGRpbmc7XHJcbihmdW5jdGlvbiAoRUJ1aWxkaW5nKSB7XHJcbiAgICBFQnVpbGRpbmdbRUJ1aWxkaW5nW1wiQ29sbGVjdG9yXCJdID0gMF0gPSBcIkNvbGxlY3RvclwiO1xyXG4gICAgRUJ1aWxkaW5nW0VCdWlsZGluZ1tcIkJsYXN0ZXJcIl0gPSAxXSA9IFwiQmxhc3RlclwiO1xyXG4gICAgRUJ1aWxkaW5nW0VCdWlsZGluZ1tcIlN0YWJpbGl6ZXJcIl0gPSAyXSA9IFwiU3RhYmlsaXplclwiO1xyXG59KShFQnVpbGRpbmcgfHwgKEVCdWlsZGluZyA9IHt9KSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuLy8gQ2hlY2sgd2hldGhlciBhIHBvaW50IGxpZXMgc3RyaWN0bHkgaW5zaWRlIGEgZ2l2ZW4gY2lyY2xlXHJcbmZ1bmN0aW9uIHBvaW50SW5SYW5nZShhLCBiLCB4LCB5LCByYW5nZSkge1xyXG4gICAgbGV0IGRpc3RQb2ludHMgPSAoYSAtIHgpICogKGEgLSB4KSArIChiIC0geSkgKiAoYiAtIHkpO1xyXG4gICAgcmFuZ2UgKj0gcmFuZ2U7XHJcbiAgICBpZiAoZGlzdFBvaW50cyA8IHJhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SXNJblJhbmdlKHBvaW50QSwgcG9pbnRCLCByYW5nZSkge1xyXG4gICAgcmV0dXJuIHBvaW50SW5SYW5nZShwb2ludEEueCwgcG9pbnRBLnksIHBvaW50Qi54LCBwb2ludEIueSwgcmFuZ2UpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlbW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxsZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2VSZW1haW5pbmcgPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gaW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmZ1bGwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbGxlY3RvciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jcmVlcCA9IDA7XHJcbiAgICAgICAgdGhpcy5uZXdjcmVlcCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEhlaWdodE1hcCB9IGZyb20gXCIuLi9pbml0cy9IZWlnaHRNYXBcIjtcclxuaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaW0pIHtcclxuICAgICAgICB0aGlzLmdldEhpZ2hlc3RUaWxlID0gKHZlYykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlc1t2ZWMueF1bdmVjLnldLmhlaWdodDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGlsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW07XHJcbiAgICB9XHJcbiAgICBjcmVhdGVXb3JsZCgpIHtcclxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IEFycmF5KHRoaXMuZGltZW5zaW9ucy54KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9ucy54OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlc1tpXSA9IG5ldyBBcnJheSh0aGlzLmRpbWVuc2lvbnMueSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb25zLnk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1tpXVtqXSA9IG5ldyBUaWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhlaWdodE1hcCA9IEhlaWdodE1hcCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb25zLng7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGltZW5zaW9ucy55OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSBoZWlnaHRNYXBbal1baV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0ID4gNilcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1tpXVtqXS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aXRoaW5Xb3JsZCh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuICh4ID4gLTEgJiYgeCA8IHRoaXMuZGltZW5zaW9ucy54ICYmIHkgPiAtMSAmJiB5IDwgdGhpcy5kaW1lbnNpb25zLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBIZWlnaHRNYXAoKSB7XHJcbiAgICBsZXQgdGVyYWluID0gW1sxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyXSxcclxuICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMl0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDJdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMl0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDJdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMl0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDFdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFsyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFsyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXHJcbiAgICBdO1xyXG4gICAgdGVyYWluLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDg7IGkrKykge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiW1wiICsgdGhpc1tpXS5qb2luKFwiLCBcIikgKyBcIl1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIltcIiArIGxpbmVzLmpvaW4oXCIsXFxuXCIpICsgXCJcXG5dO1wiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0ZXJhaW47XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBNYWluIGZyb20gXCIuL2FjdGlvbnMvbWFpblwiO1xyXG52YXIgbWFpbiA9IG5ldyBNYWluKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==