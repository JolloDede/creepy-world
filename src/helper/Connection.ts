import Point from "./Point";

export class Connection {
    a: Point;
    b: Point;

    constructor(a: Point, b: Point) {
        this.a = a;
        this.b = b;
    }
}

export class Connections {
    connections: Connection[] = [];

    add = (newConnection: Connection) => {
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
    }

    clear = () => {
        this.connections = [];
    }
}
