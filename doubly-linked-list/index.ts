import { DoublyLinkedList } from './main';

const list =
  new DoublyLinkedList<number>();

list.append(1);
list.append(2);
list.append(3);
list.preppend(9);

console.log(list.find(1));
