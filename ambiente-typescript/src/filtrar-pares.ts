export const filtrar_pares = (arr: number[]): number[] => {
    const resultado: number[] = arr.filter(num => num % 2 === 0);
    return resultado;
};

const array_numeros: number[] = [8, 3, 9, 5, 6, 12];

console.log(filtrar_pares(array_numeros));