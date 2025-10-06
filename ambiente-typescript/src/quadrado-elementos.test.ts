import { quadrado } from './quadrado-elementos.js';

test('1a - quadrado', () => {
    expect(quadrado([1,2,3,4,5])).toEqual([1,4,9,16,25]);
});