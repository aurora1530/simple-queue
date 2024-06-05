class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

export class Queue<T> {
  #head: Node<T> | null = null;
  #tail: Node<T> | null = null;
  #size: number = 0;

  constructor() {}

  enqueue(value: T): void {
    const newNode = new Node(value);
    if (this.#tail === null) {
      this.#head = this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#size++;
  }

  dequeue(): T | null {
    if (this.#head === null) return null;

    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#size--;
    if (this.#head === null) {
      this.#tail = null;
    }

    return value;
  }

  includes(value: T): boolean {
    let current = this.#head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get size(): number {
    return this.#size;
  }

  get isEmpty(): boolean {
    return this.#size === 0;
  }

  get headValue(): T | null {
    return this.#head?.value ?? null;
  }
}
