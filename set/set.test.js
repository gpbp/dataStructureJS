const { afterEach, test, expect } = require('@jest/globals');
const Set = require('./set');

const set = new Set();

afterEach(() => {
    set.clear();
});

test('Add element to the set', () => {
    set.add(1);
    expect(set.size()).toBe(1);
    expect(set.remove(1)).toBe(true);
});

test('Remove element to the set', () => {
    set.add(1);
    expect(set.remove(1)).toBe(true);
});

test('Check if the set has an element', () => {
    set.add(1);
    expect(set.has(1)).toBe(true);
});

test('Remove an element from an empty list', () => {
    expect(set.remove()).toBe(false);
});

test('Test union function', () => {
    const firstSet = new Set();
    firstSet.add(1);
    firstSet.add(2);
    firstSet.add(3);
    const secondSet = new Set();
    secondSet.add(4);
    secondSet.add(1);
    secondSet.add(5);
    const unionSet = firstSet.union(secondSet);
    expect(unionSet.size()).toBe(5);
    expect(unionSet.has(1)).toBe(true);
    expect(unionSet.has(2)).toBe(true);
    expect(unionSet.has(3)).toBe(true);
    expect(unionSet.has(4)).toBe(true);   
    expect(unionSet.has(5)).toBe(true);
    expect(unionSet.remove(1)).toBe(true);
});

// this test proves that has function doesn't check object equality
test('Remove an object', () => {
    set.add({name: 'John', age: 23});
    expect(set.remove({name: 'John', age: 23})).toBe(false);
});

test('Test intersection function', () => {
    const firstSet = new Set();
    firstSet.add(1);
    firstSet.add(2);
    firstSet.add(3);
    firstSet.add(5);
    const secondSet = new Set();
    secondSet.add(2);
    secondSet.add(3);
    secondSet.add(4);
    secondSet.add(7);
    const intersectionSet = firstSet.intersection(secondSet);
    expect(intersectionSet.size()).toBe(2);
    expect(intersectionSet.remove(2)).toBe(true);
    expect(intersectionSet.remove(3)).toBe(true);
});

test('Test difference function', () => {
    const firstSet = new Set();
    firstSet.add(1);
    firstSet.add(2);
    firstSet.add(3);
    firstSet.add(5);
    const secondSet = new Set();
    secondSet.add(2);
    secondSet.add(3);
    secondSet.add(4);
    secondSet.add(7);
    const differenceSet = firstSet.difference(secondSet);
    expect(differenceSet.size()).toBe(2);
    expect(differenceSet.has(1)).toBe(true);
    expect(differenceSet.has(5)).toBe(true);
});

test('Test subset function', () => {
    const firstSet = new Set();
    firstSet.add(2);
    firstSet.add(3);
    const secondSet = new Set();
    secondSet.add(2);
    secondSet.add(3);
    secondSet.add(4);
    secondSet.add(7);
    expect(firstSet.subset(secondSet)).toBe(true);
})