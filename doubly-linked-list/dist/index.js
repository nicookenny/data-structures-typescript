"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const list = new main_1.DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.preppend(9);
console.log(list.find(1));
