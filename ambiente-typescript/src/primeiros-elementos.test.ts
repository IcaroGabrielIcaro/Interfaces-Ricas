import { primeiros_elem } from "./primeiros-elementos";

test('1a - 2 primeiros elementos array', () => {
    expect(primeiros_elem([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
});