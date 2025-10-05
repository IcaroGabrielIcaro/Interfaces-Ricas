class Base {
    greet(): void {
        console.log("Hello, world!");
    }
}

interface OtherBase {
    secondGreet(): void;
}

class Derived extends Base implements OtherBase {
    greet(name?: string): void {
        if (name === undefined) {
            super.greet();
        } else {
            console.log(`Hello, ${name.toUpperCase()}` );
        }
    }

    secondGreet(): void {
        console.log("Hello from OtherBase!");
    }
}

const d: Derived = new Derived();
d.greet();
d.greet("Icaro");


// Exemplo do professor

interface Base {
    name: string; // interface definindo tipos, alem de definir comportamentos
    greet(): void;
}

interface SecondBase {
    secondGreet(): void;
}

interface ThirdBase {
    thirdGreet(): void;
}

class Derived2 implements Base, SecondBase, ThirdBase {
    name: string;
    constructor(name?: string) {
        this.name = name!;
    }

    thirdGreet(): void {
        throw new Error("Method not implemented.")
    }
    
    secondGreet(): void {
        throw new Error("Method not implemented.")
    }

    greet(): void {
        if (this.name === undefined) {
            console.log("Hello, World");
        } else {
            console.log( `Hello, ${this.name.toUpperCase()}` );
        }
    }
}