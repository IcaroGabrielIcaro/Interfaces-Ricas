// Declaração de função

function multiplicar(n1:number, n2:number): number {
    return n1*n2;
}

console.log(multiplicar(50,34));



// Funções anonimas
// Declaração de função em uma variável

let multiplicacao = function(n1: number, n2: number): number {
    return n1*n2;
};

console.log(multiplicacao(50,34));



// Recursividade

var foo = function bar() {
    bar()
    arguments.callee()
    foo()
};



// Arrow functions
// Nova forma de definir uma função
// Você coloca os parâmetros entre parênteses, separados por vírgula, 
// coloca a seta e depois bota a expressão ou os comandos entre chaves

// É mais usado quando um dos parâmetros é uma função

const mult = (n1: number, n2: number): number => {
    return n1*n2;
};

console.log(mult(50,34));

// Outros exemplos

const materiais = ["Hydrogen", "Helium", "Lithium", "Berylium"];

materiais.forEach( material => console.log(`Materal: ${material}`) );
// Pega cada um dos elementos e mostra na tela

let tamanhos = materiais.map( material => material.length );
console.log(tamanhos);
// Vai converter cada um dos elementos do array e convertendo para outro tipo

let filtragem = materiais.filter( material => material.length > 6 );
console.log(filtragem);
// Retorno vai ser outro array com o filtro que foi passado



/* 
 * Função MAP retorna um numero
 * que recebe 2 parametros, um array de numeros (direita) 
 * e outra funcao, que está definido pela funcao seta
 * essa funcao tem que ser do tipo que ele está esperando: 
 * a entrada é um numero e o retorno é um numero
 * 
 * varre os elementos do array aplicando o resultado da 
 * primeira funcao que foi passada como parametro
 * */
function map (f: (x: number) => number, a: number[]): number[] {
    let resultado = [];
    let i;
    for (i = 0; i != a.length; i++) {
        resultado [i] = f(a[i]);
    }
    return resultado;
}

let funcaoCubo = function(x: number) {
    return x*x*x;
};

let funcaoCuboArrow = (x: number): number => {
    return x*x*x;
};

let arrei = [3,4,5,6];
let result = map(funcaoCubo, arrei);
console.log(result);