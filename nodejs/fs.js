import fs from 'node:fs';

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// fs.appendFile('file.txt', 'javascript', (err) => {
//     if (err)  throw err;
//     console.log('success');
// });

// fs.copyFile('src.txt', 'dest.txt', fs.constants.COPYFILE_EXCL, (err) => {
//     if (err) throw err;
//     console.log('success');
// });

// fs.mkdir('D://nodejs', { recursive: false }, (err) => {
//     if (err)  throw err;
//     console.log('success');
// });

// fs.rename('file1.txt', 'file2.txt', (err) => {
//     if (err) throw err;
//     console.log('success');
// });

// fs.rmdir('D://nodejs', (err) => {
//     if (err) throw err;
//     console.log('success');
// });

// fs.stat('app.js', (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
// });

// fs.truncate('file.txt', (err) => {
//     if (err) throw err;
//     console.log('success');
// });

// fs.unlink('file.txt', (err) => {
//     if (err) throw err;
//     console.log('success');
// });

// fs.writeFile('output.txt', 'javascript', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('success');
// });