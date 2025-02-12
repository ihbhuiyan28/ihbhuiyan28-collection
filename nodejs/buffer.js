import { Buffer } from 'node:buffer';

const buf1 = Buffer.alloc(4);
console.log(buf1);

const buf2 = Buffer.alloc(4, 10);
console.log(buf2);

const buf3 = Buffer.from([10, 11, 12]);
console.log(buf3);

const buf4 = Buffer.from('javascript', 'utf8');

// buf4.write('type');

console.log(buf4);
console.log(buf4.toString());
console.log(buf4.toString('hex'));