export class Stack<T> {
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

  push(val: T) {
    this.storage.unshift(val);
  }

  pop() {
    const first = this.storage[0];
    const storage =
      this.storage.slice(1);

    this.storage = storage;

    return first;
  }
}
