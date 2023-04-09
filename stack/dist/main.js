"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
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
    push(val) {
        this.storage.unshift(val);
    }
    pop() {
        const first = this.storage[0];
        const storage = this.storage.slice(1);
        this.storage = storage;
        return first;
    }
}
exports.Stack = Stack;
