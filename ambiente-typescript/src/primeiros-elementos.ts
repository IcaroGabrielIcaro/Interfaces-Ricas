export const primeiros_elem = (arr: number[]): number[] => {
    const resultado: number[] = arr.slice(0, 2);
    return resultado;
};

const elems: number[] = [2, 4, 6, 2, 8, 9, 5];

console.log(primeiros_elem(elems));