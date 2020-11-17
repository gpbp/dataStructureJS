const { test, afterEach, expect } = require('@jest/globals');
const BinarySearchTree = require('./binary-search-tree');

const binarySearchTree = new BinarySearchTree();

afterEach(() => {
    binarySearchTree.clear();
});

const addFakeData = function() {
    const integers = [1, 2, 3, 4, 5, 6, 7, 89, 87, 88, 69, 67, 46, 75, 80, 78, 39, 73];
    integers.forEach((integer) => {
        binarySearchTree.add(integer);
    });
};

test('Add an element to the binary search tree', () => {
    binarySearchTree.add(1);
    expect(binarySearchTree.size()).toBe(1);
});

test('Add an element to the binary search tree and then search for the maximum value', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    expect(binarySearchTree.findMax()).toBe(3);
});

test('Find the minimum and the maximum value of the tree', () => {
    addFakeData();
    expect(binarySearchTree.findMin()).toBe(1);
    expect(binarySearchTree.findMax()).toBe(89);
});

test('Find a data from the binary search tree', () => {
    addFakeData();
    expect(binarySearchTree.find(8989)).toBeNull();
    expect(binarySearchTree.find(7)).toBe(7);
});

test('Check if an element is present or not', () => {
    addFakeData();
    expect(binarySearchTree.isPresent(4)).toBe(true);
    expect(binarySearchTree.isPresent(9898)).toBe(false);
});

test('Remove one element from the tree', () => {
    addFakeData();
    binarySearchTree.remove(2);
    expect(binarySearchTree.isPresent(2)).toBe(false);
    expect(binarySearchTree.size()).toBe(17);
});


