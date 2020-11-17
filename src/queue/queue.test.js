const { afterEach, test, expect } = require('@jest/globals');
const Queue = require('./queue');

const queue = new Queue();

afterEach(() => {
    queue.clear();
});

test('Add an element to the queue', () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe(1);
});

test('Remove an element from the queue', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
});

test('Peek the first element of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(4);
    expect(queue.peek()).toBe(1);
});

test('Check if the queue is empty or not', () => {
    expect(queue.isEmpty()).toBe(true);
});

