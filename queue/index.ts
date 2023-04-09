import { Queue } from './main';

const queue = new Queue<number>();

// FIFO
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(12);
queue.enqueue(29);

console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
