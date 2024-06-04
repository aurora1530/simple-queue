import { Queue } from './queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('enqueue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size).toBe(3);
    expect(queue.headValue).toBe(1);
  });

  test('dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(null);
  });

  test('isEmpty', () => {
    expect(queue.isEmpty).toBe(true);

    queue.enqueue(1);
    expect(queue.isEmpty).toBe(false);

    queue.dequeue();
    expect(queue.isEmpty).toBe(true);
  });
});
