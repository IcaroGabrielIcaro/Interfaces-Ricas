// Código javascript que vai rodar o código sem precisar instalar nada

// let animal = 'cavalo'
// switch(animal) {
//     case 'vaca': console.log('A vaca foi selecionada.')
//     break;
//     case 'cavalo': console.log('O cavalo foi selecionado.')
//     break;
//     default:
//         console.log('Animal nao detectado.')        
// }

// Para rodar um código typescript é necessario instalar o typescript
// Use o comando:
// npm install -g ts-node
// ts-node src/code.ts -> ao executar esse comando ele vai rodar o codigo

let animal : string;
animal = 'cavalo';

// let animal = 'cavalo'
switch (animal) {
    case 'vaca': console.log('A vaca foi selecionada.')
        break;
    case 'cavalo': console.log('O cavalo foi selecionado.')
        break;
    default:
        console.log('Animal nao detectado.')
}
