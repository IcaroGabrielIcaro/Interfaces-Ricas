// Mais tipos

// A sintaxe da função inclui nomes de parâmetros.
let fst: (a: any, b: any) => any = (a, b) => a;

// ou mais precisamente:
let fst2: <T, U>(a: T, b: U) => T = (a, b) => a;


// A sintaxe do tipo literal de objeto reflete de perto a sintaxe
// do valor literal do objeto
let o: { n: number; xs: object[] } = { n: 1, xs: [] };

// Tipos em caixa

(1).toExponential();
// Equivale a 
Number.prototype.toExponential.call(1);

// Tipagem gradual
const anys = [];
anys.push(1);
anys.push("oh no");
anys.push({ anything: "goes" });

anys.map(anys[1]);