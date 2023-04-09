import { HashTable } from './main';

const table = new HashTable<number>(32);

console.log({ table });

table.set('1', 1);
table.set('2', 2);
table.set('3', 3);
table.set('SAF', 21);

console.log(table);

console.log(table.get('2'));
console.log(table.get('21'));
