"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const list = new main_1.LinkedList();
list.append(2);
list.append(5);
list.append(9);
list.append(192);
list.append(5);
list.prepend(1);
const personList = new main_1.LinkedList();
const p1 = {
    id: 1,
    name: 'Nicolas',
};
const p2 = {
    id: 2,
    name: 'Pedro',
};
personList.append(p1);
personList.append(p2);
console.log(personList);
