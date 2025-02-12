import os from 'node:os';

const eol = os.EOL;
console.log(eol);

const availableParallelism = os.availableParallelism();
console.log(availableParallelism);

const arch = os.arch();
console.log(arch);

const cpus = os.cpus();
console.log(cpus);

const freemem = os.freemem();
console.log(freemem);

const homedir = os.homedir();
console.log(homedir);

const hostname = os.hostname();
console.log(hostname);

const machine = os.machine();
console.log(machine);

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

const platform = os.platform();
console.log(platform);

const release = os.release();
console.log(release);

const tmpdir = os.tmpdir();
console.log(tmpdir);

const totalmem = os.totalmem();
console.log(totalmem);

const type = os.type();
console.log(type);

const uptime = os.uptime();
console.log(uptime);

const userInfo = os.userInfo();
console.log(userInfo);

const version = os.version();
console.log(version);