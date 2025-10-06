export const quadradoFor = (arr: number[]): number[] => {
    const resultado: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * arr[i])
    }
    return resultado;
}

export const quadradoForEach = (arr: number[]): number[] => {
    const resultado: number[] = [];
    arr.forEach(num => resultado.push(num * num));
    return resultado;
};

const numeros : number[] = [1,2,3,4,5]

console.log(quadradoForEach(numeros));