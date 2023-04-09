import { LinkedList } from './main';

const list = new LinkedList<number>();

list.append(2);
list.append(5);
list.append(9);
list.append(192);
list.append(5);
list.prepend(1);

type Person = {
  id: number;
  name: string;
};

const personList =
  new LinkedList<Person>();

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
