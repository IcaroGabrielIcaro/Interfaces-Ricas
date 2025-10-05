// Tipos de composição
/* Criacao de tipos complexos combinando tipos simples */

// Sindicatos
/* Um tipo pode ser um dos muitos tipos */

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

/* Uma função pode receber 2 tipos como parametro e
 * retornar tipos diferentes pela mesma função */

function getLength(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}

// Generics

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWitNameArray = Array<{ name: string }>

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// Esta linha é um pedacinho pra falar pro TypeScript que existe
// uma constante chamada 'backpack', e pra nao se preocupar daonde
// ele veio
declare const backpack: Backpack<string>;
declare const backpack2: Backpack<number>;

// objeto é uma string porque nos o declaramos acima na variavel
// do backpack 
const object = backpack.get();

// Ja que backpack é uma string voce nao pode passar um numero
// para a funcao add
// backpack.add(23);