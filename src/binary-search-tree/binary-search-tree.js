/*
 * this class represents each node of a tree
 */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
 
/*
 * implementation of a binary search tree in Javascript
 * binary search tree can only have two branches for every node
 * also a binary search tree is ordered
 * each left subtree is less than or equal to the value of the parent node
 * each right subtree is great than the value of the parent node
 * because of that, on average, operations are able to skip
 * about half of the tree so that each lookup, insertion or deletion 
 * take time proportional to the logarithm of the number of items
 * stored in the tree
 * this implementation doesn't allow you to have duplicated data
 */
class BinarySearchTree {
    constructor() {
        this.nbOfElements = 0;
        this.root = null;
    }

    /*
     * add an element to the tree
     */
    add(data, node = this.root) {
        if (this.root == null) {
            this.root = new Node(data);
            this.nbOfElements++;
            return;
        }
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data);
                this.nbOfElements++;
                return;
            } else {
                this.add(data, node.left);
            }
        } else if (data > node.data) {
            if (node.right === null) {
                node.right = new Node(data);
                this.nbOfElements++;
                return;
            } else {
                this.add(data, node.right);
            }
        } else {
            return;
        } 
    }

    /*
     * find the smallest element of the tree
     */
    findMin(node = this.root) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    /*
     * find the greatest element of the tree
     */
    findMax(node = this.root) {
        let current = node;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    /*
     * return the size of the tree
     */
    size() {
        return this.nbOfElements;
    }

    /*
     * clear the binary search tree
     */
    clear() {
        this.nbOfElements = 0;
        this.root = null;
    }

    /*
     * find the data from the binary search tree
     */
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current.data;
    }

    /*
     * check if an element is present or not
     */
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    /*
     * remove the data from the tree
     */
    remove(data) {
        const removeNode = function(data, node) {
            if (node === null) {
                return;
            }
            if (data === node.data) {
                // node has no children 
                if (node.left === null && node.right === null) {
                    node = null;
                    return;
                }
                // node has no left child 
                if (node.left === null) {
                    node.data = node.right.data;
                    removeNode(node.data, node.right);
                    return;
                }
                if (node.right === null) {
                    node.data = node.left.data;
                    removeNode(node.data, node.left);
                    return;
                }
                // node has two children
                // the node's value will become the minimum value
                // of its right sub-tree
                let current = node.right;
                while (current.left !== null) {
                    current = current.left;
                }
                node.data = current.data;
                removeNode(node.data, node.right);
            } else if (data < node.data) {
                node.left = removeNode(data, node.left);
            } else {
                node.right = removeNode(data, node.right);
            }
        }
        removeNode(data, this.root, this);
        this.nbOfElements--;
    }

    /*
     * find out if the binary search tree is balanced or not
     */
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    /*
     * find the minimum height of the tree
     */
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    /*
     * find the maximum height of the tree
     */
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    
    inOrder() {
      if (this.root == null) {
        return null;
      } else {
        let result = new Array();
        function traverseInOrder(node) {       
          node.left && traverseInOrder(node.left);
          result.push(node.data);
          node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
      };
    }
    preOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePreOrder(node) {
          result.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      };
    }
    postOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
      }
    }
    
    levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
  }

  module.exports = BinarySearchTree;