export class HashTable<T> {
  private buckets: {
    key: string;
    value: T;
  }[][];

  private keys: {
    [key: string]: any;
  };

  constructor(size: number = 32) {
    this.keys = {};
    this.buckets = new Array(size)
      .fill(0)
      .map(() => []);
  }

  hash(key: string) {
    const hash = Array.from(key).reduce(
      (acc, key) =>
        acc + key.charCodeAt(0),
      0
    );

    return hash % this.buckets.length;
  }

  set(key: string, val: T) {
    const hash = this.hash(key);

    this.keys[key] = hash;

    const bucket = this.buckets[hash];

    const value = bucket.find(
      (bucketValue) =>
        bucketValue.value === val
    );

    if (!value) {
      bucket.push({ key, value: val });
    }
  }

  get(key: string) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];

    const value = bucket.find(
      (bucketValue) =>
        bucketValue.key === key
    );

    return value;
  }
}
