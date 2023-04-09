import { isUndefined } from './utils';

export class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    return this;
  }

  prepend(value: T) {
    const node = new Node(
      value,
      this.head
    );

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  find(value: T) {
    if (!this.head) {
      return null;
    }

    const current = {
      node: this.head,
    };

    while (current.node) {
      if (
        !isUndefined(value) &&
        current.node.value === value
      ) {
        return current.node;
      }

      current.node = current.node.next!;
    }

    return null;
  }
}

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(
    value: T,
    next: Node<T> | null = null
  ) {
    this.value = value;
    this.next = next;
  }
}
