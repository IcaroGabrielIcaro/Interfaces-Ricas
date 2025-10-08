import { filtrar_pares } from "./filtrar-pares";

test('1a - filtrar pares simples', () => {
    expect(filtrar_pares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});