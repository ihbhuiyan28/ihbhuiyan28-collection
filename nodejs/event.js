import { EventEmitter } from 'node:events';

let count = 0;

const emitter = new EventEmitter();

emitter.on('event', function (a, b) {

    setImmediate(() => {
        console.log('asynchronous');
    });

    const c = a + b;
    console.log(`${a} + ${b} = ${c}, this: ${this}`);

    console.log(`count: ${++count}`);
});

// emitter.once('event', () => {
//     console.log(++count);
// });

emitter.emit('event', 2, 3);
// emitter.emit('event');

// emitter.on('error', (err) => {
//     console.error(`on: ${err}`);
// });

// emitter.emit('error', new Error('emit'));