import { ordena_elementos } from "./ordena-elementos";

test('1a - ordenacao elementos simples', () => {
    expect(ordena_elementos(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['lapis', 'carro', 'boneco', 'ave']);
});