// Tipo Estrutural do Sistema

interface Point {
    x: number;
    y: number;
}

function logPoint2(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint2(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint2(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint2(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
// logPoint(color); o argumento do tipo {hex: string; } 
// não é uma assinatura do paramento 'Point'

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint2(newVPoint); // logs "13, 56"

// Tipos vazios

class Empty {}

function fn(arg: Empty) {
    // faz algo?
}

// sem erros, mas isso não é um "Empty"?
fn({ k: 10 })

// Tipos identicos

class Car {
    drive() {
        // hit the gas
    }
}

class Golfer {
    drive() {
        // hit the ball far
    }
}

let w: Car = new Golfer();
