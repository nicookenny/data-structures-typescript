"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const queue = new main_1.Queue();
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
