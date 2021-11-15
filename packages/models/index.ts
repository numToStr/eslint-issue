export class Hello {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    world() {
        return "Hello World!";
    }

    name() {
        return this.#name;
    }
}
