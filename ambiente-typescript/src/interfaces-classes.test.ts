import { Carro, Casa } from "./interfaces-classes";

test("1a - calcular valor do carro", () => {
    const carro = new Carro("Sedan", 100000, 2020);
    expect(carro.calcularvalor()).toBeLessThan(100000);
});

test("1b - calcular valor da casa", () => {
    const casa = new Casa("Avenida Pompeia", 100, 3000);
    expect(casa.calcularvalor()).toBe(300000);
});