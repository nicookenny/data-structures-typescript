import { Stack } from './main';

const stack = new Stack<number>();

// LIFO
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

console.log(stack.pop());

console.log(stack);
