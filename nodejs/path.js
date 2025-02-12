import path from 'node:path';

const filename = import.meta.filename;
console.log(filename);

const dirname = import.meta.dirname;
console.log(dirname);

const basename = path.basename(filename);  // path.basename(filename, '.js');
console.log(basename);

const dir = path.dirname(filename);
console.log(dir);

const extname = path.extname(filename);
console.log(extname);

const format = path.format({
    base: '',
    dir: '',
    ext: '',
    name: '',
    root: ''
});  // path.format(parse);
console.log(format);

const isAbsolute = path.isAbsolute('./index.html');
console.log(isAbsolute);

console.log(path.join(...['parent', 'child', 'index.html']));
console.log(path.join(...['/parent', 'child', 'index.html']));
console.log(path.join(...['parent', '///child', 'index.html']));
console.log(path.join(...['parent', 'child', '../index.html']));
console.log(path.join(dirname, 'index.html'));

const normalize = path.normalize('///first////second');
console.log(normalize);

const parse = path.parse(filename);
console.log(parse);

const relative = path.relative('GitHub', 'nodejs');
console.log(relative);

console.log(path.resolve(...['parent', 'child', 'index.html']));
console.log(path.resolve(...['/parent', 'child', 'index.html']));
console.log(path.resolve(...['parent', '///child', 'index.html']));
console.log(path.resolve(...['parent', 'child', '../index.html']));
console.log(path.resolve(dirname, 'index.html'));

const sep = path.sep;
console.log(sep);