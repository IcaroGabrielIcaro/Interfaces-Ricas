import { concat } from './concatenacao-strings.js';

test('1a - concatenação simples', () => {
    expect(concat(['Arrays', 'com', 'TypeScript'])).toEqual('Arrays com TypeScript');
});