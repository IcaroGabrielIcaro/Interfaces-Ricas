export const ordena_elementos = (arr: string[]): string[] => {
    const resultado: string[] = arr.sort((a, b) => b.localeCompare(a));
    return resultado;
};

const array: string[] = ['carro', 'boneco', 'ave', 'lapis'];

console.log(ordena_elementos(array));