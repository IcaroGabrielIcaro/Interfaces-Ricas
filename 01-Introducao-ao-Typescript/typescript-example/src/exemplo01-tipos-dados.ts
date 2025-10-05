// Tipos de dados:
// number, string, boolean, null, undefined, 
// object, array, date, symbol, function

// tipos numericos:
// literal inteiro, literal ponto flutuante

// tipo booleano
// 0 == "" -> true -> 0 e vazio é 0, é tudo 0 (nao vai comparar tipos)
// 0 === "" -> false
// 0 !== "" -> true

// tipo texto (string)

// template literal
// operador (+)

let animale = 'cavalo';

switch(animale) {
    case 'vaca': animale = 'vaca leiteira'
    break;
    case 'cavalo': animale = 'cavalo de raca'
    break;
    default:
        animale = 'nao detectado'
}

console.log(`${animale} foi selecionado`) // mais elegante

console.log(`${animale} 
    foi
     selecionado`) // isso funciona

console.log(animale + " foi selecionado novamente")

console.log(animale + "\n" + 
"    foi\n" + 
"     selecionado novamente") // teria que fazer assim para fazer a mesma funcionalidade