/* Determinação dos tipos das variáveis
 * documentação: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * documentação Ts para programadores java: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html
 * 
 * Diferenca JS para TS: em tempo de desenvolvimento é possivel
 * conter erros que so seriam descobertos com ele funcionando.
 * 
 * Em tempo de desenvolvimento a propria IDE vai apontando
 * problemas.
 * */


 // TypeScript para programadores JS: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 // Tipos por inferencia

 let helloWord = "Hello World"; // let helloWord: string

 // Definição de tipos no JS:

//  const user = {
//      name: "Hayes",
//      id: 0,
//  };

 // Definição de tipos no TS:

 interface User {
     name: string;
     id: number;
 }

 const user: User = {
     name: "Hayers",
     id: 0,
 };

 class UserAccount {
     name: string;
     id: number;

     constructor(name: string, id: number) {
         this.name = name;
         this.id = id;
     }
 }

 const user2: User = new UserAccount("Murphy", 1);


//  const user2: User = {
//     // username: "Hayers",
//     // username nao existe no tipo User
//      id: 0,
//  };

interface Pointlike {
    x: number;
    y:  number;
}

interface Named {
    name: string;
}

function logPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
}

function logName(x: Named) {
    console.log("Hello, " + x.name);
}

const obj = {
    x: 0,
    y: 0,
    name: "Origin",
};

logPoint(obj);
logName(obj);