const { test, afterEach, expect } = require('@jest/globals');
const Stack = require('./stack');

const stack = new Stack();

afterEach(() => {
    stack.clear();
});

test('Push an element to the stack', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
});

test('Push an element and check if that element is on top', () => {
    stack.push(1); 
    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);
});

test('Check the size of the stack when it\'s empty', () => {
    expect(stack.isEmpty()).toBe(true);
});

test('Check if we can pop the first element from the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
});

test('Check if we can verify the size of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
});

test('Peek the element on top of the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(2);
})