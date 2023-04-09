export class Queue<T> {
  private storage: T[];

  constructor() {
    this.storage = [];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.storage[0];
  }

  enqueue(val: T) {
    this.storage.push(val);
  }

  dequeue() {
    const storage = this.storage;
    const first = storage.shift();

    this.storage = storage;

    return first;
  }
}

/*
export class Queue
*/
