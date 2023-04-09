"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.storage = [];
    }
    isEmpty() {
        return this.storage.length === 0;
    }
    peek() {
        if (this.isEmpty())
            return null;
        return this.storage[0];
    }
    enqueue(val) {
        this.storage.push(val);
    }
    dequeue() {
        const storage = this.storage;
        const first = storage.shift();
        this.storage = storage;
        return first;
    }
}
exports.Queue = Queue;
/*
export class Queue
*/
