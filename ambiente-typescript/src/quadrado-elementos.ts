export const quadrado = (arr: number[]): number[] => {
    const resultado: number[] = [];
    arr.forEach(num => resultado.push(num * num));
    return resultado;
};

const numeros : number[] = [1,2,3,4,5]

console.log(quadrado(numeros));