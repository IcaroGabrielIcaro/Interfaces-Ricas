interface Avaliavel {
    calcularvalor(): number;
}

export class Carro implements Avaliavel {
    constructor(public modelo: string, public precoBase: number, public ano: number) {}

    calcularvalor(): number {
        const depreciacao = (new Date().getFullYear() - this.ano) * 0.05;
        return this.precoBase * (1 - depreciacao);
    }
}

export class Casa implements Avaliavel {
    constructor(public endereco: string, public metrosQuadrados: number, public valorM2: number) {}

    calcularvalor(): number {
        return this.metrosQuadrados * this.valorM2;
    }
}

export { Avaliavel };

const carro = new Carro("Sedan", 100000, 2020);
console.log(carro.calcularvalor());

const casa = new Casa("Avenida Pompeia", 100, 3000);
console.log(casa.calcularvalor());