let alunos = ['carlos', 'joao', 'marta'];
console.log(alunos);
let alunos2 = Array('Carlos', 'joao', 'maria');
console.log(alunos2);

alunos.push('Jose'); // adiciona no ultimo
console.log(alunos);

let professores = Array('Marcelo', 'Alessando');
professores.pop(); // remove no ultimo
console.log(professores);

for (let nome of alunos) { // operações sob o array
    console.log(nome);
}