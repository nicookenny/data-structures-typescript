"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class HashTable {
    constructor(size = 32) {
        this.keys = {};
        this.buckets = new Array(size)
            .fill(0)
            .map(() => []);
    }
    hash(key) {
        const hash = Array.from(key).reduce((acc, key) => acc + key.charCodeAt(0), 0);
        return hash % this.buckets.length;
    }
    set(key, val) {
        const hash = this.hash(key);
        this.keys[key] = hash;
        const bucket = this.buckets[hash];
        const value = bucket.find((bucketValue) => bucketValue.value === val);
        if (!value) {
            bucket.push({ key, value: val });
        }
    }
    get(key) {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];
        const value = bucket.find((bucketValue) => bucketValue.key === key);
        return value;
    }
}
exports.HashTable = HashTable;
