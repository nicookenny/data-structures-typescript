"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const utils_1 = require("./utils");
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }
    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }
    find(value) {
        if (!this.head) {
            return null;
        }
        const current = {
            node: this.head,
        };
        while (current.node) {
            if (!(0, utils_1.isUndefined)(value) &&
                current.node.value === value) {
                return current.node;
            }
            current.node = current.node.next;
        }
        return null;
    }
}
exports.LinkedList = LinkedList;
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
