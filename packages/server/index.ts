// Require the framework and instantiate it
import F from "fastify";
import { Hello } from "@eslint-issue/models";

const fastify = F({
    logger: true,
});

class Foo extends Hello {
    constructor() {
        super("numToStr");
    }
}

// Declare a route
// eslint-disable-next-line @typescript-eslint/require-await
fastify.get("/", async () => {
    return {
        hello: new Foo().world(),
    };
});

// Declare a route
fastify.get("/name", async (_, rep) => {
    return rep.send({
        name: new Foo().name(),
    });
});

// Run the server!
async function start() {
    await fastify.listen(3000);
}

start().catch(err => {
    fastify.log.error(err);
    throw err;
});
