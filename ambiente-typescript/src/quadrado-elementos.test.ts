import { quadradoFor, quadradoForEach } from './quadrado-elementos.js';

test('1a - quadrado For simples', () => {
    expect(quadradoFor([1,2,3,4,5])).toEqual([1,4,9,16,25]);
});

test('2a - quadrado For Each', () => {
    expect(quadradoForEach([1,2,3,4,5])).toEqual([1,4,9,16,25]);
});