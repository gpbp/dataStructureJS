/*
 * implementation of a stack in Javascript
 */
const Stack = function() {
    this.nbOfElements = 0; // the nbOfElements of the stack
    this.storage = {}; // the storage where the stack stores its elements

    /*
     * push an element to the top of the stack
     */
    this.push = function(value) {
        this.storage[this.nbOfElements] = value;
        this.nbOfElements++;
    };

    /*
     * remove an element from the top of the stack
     */
    this.pop = function() {
        if (this.nbOfElements == 0) {
          return undefined;
        }
        this.nbOfElements--;
        let result = this.storage[this.nbOfElements];
        delete this.storage[this.nbOfElements];
        return result;
    };

    /*
     * return the size of the stack
     */
    this.size = function() {
        return this.nbOfElements;
    };

    /*
     * peek the top of the stack
     */
    this.peek = function() {
        return this.storage[this.nbOfElements - 1];
    };

    /*
     * clear the entire stack
     */
    this.clear = function() {
        for (let prop in this.storage) delete this.storage[prop];
        this.nbOfElements = 0;
    };

    /*
     * check if the stack is empty or not
     */
    this.isEmpty = function() {
        return this.nbOfElements == 0;
    };  
}

module.exports = Stack;