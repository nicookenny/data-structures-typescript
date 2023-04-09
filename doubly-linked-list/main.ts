import { isUndefined } from '../utils';

export class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // agregar un nodo al final de la lista
  append(value: T) {
    // creo el nodo
    const node = new Node(value);

    // Si la lista no tiene head, este nodo es el primer elemento
    if (!this.head) {
      // este nodo es tanto la cabeza como la cola de la lista
      this.head = node;
      this.tail = node;
    } else {
      // el nodo anterior es la cola actual apuntando al nodo nuevo
      this.tail!.next = node;
      node.previous = this.tail;

      // la cola actual, es el nodo
      this.tail = node;
    }

    return this;
  }

  // agregar un nodo al inicio de la lista
  preppend(value: T) {
    // creo el nodo, cuyo "next" es la cabeza actual (ya que la head actual, pasará a ser el segundo elemento)
    const node = new Node(
      value,
      this.head
    );

    // si mi lista ya tiene head, entonces enlazo el "previous" al nuevo nodo
    if (this.head) {
      this.head.previous = node;
    }

    // ahora, la head es el nuevo nodo
    this.head = node;

    // si no existe tail, esta es el nuevo nodo
    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  find(value: T) {
    if (!this.head) return null;

    const current = {
      node: this.head,
    };

    while (current.node) {
      if (
        !isUndefined(value) &&
        current.node.value === value
      )
        return current.node;

      current.node = current.node.next!;
    }

    return null;
  }
}

// cada nodo recibe un valor, y puede recibir o no next y previous (en caso de querer agregarlo en el medio de la lista)
class Node<T> {
  value: T;
  next: Node<T> | null;
  previous: Node<T> | null;

  constructor(
    value: T,
    next: Node<T> | null = null,
    previous: Node<T> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  toString() {
    return JSON.stringify(this.value);
  }
}
