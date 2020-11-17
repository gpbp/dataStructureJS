/*
 * implementation of a queue in Javascript
 */
const Queue = function() { 
    this.collection = []; // this collection will hold the data of the queue

    /*
     * add an element to the queue
     */
    this.enqueue = function(element) {
        this.collection.push(element);
    };

    /*
     * remove an element from the queue
     */
    this.dequeue = function() {
        return this.collection.shift(); 
    };

    /*
     * peek the first element of the queue
     */
    this.peek = function() {
        return this.collection[0];
    };

    /*
     * return the size of the queue
     */
    this.size = function() {
        return this.collection.length; 
    };

    /*
     * check if the queue is empty or not
     */
    this.isEmpty = function() {
        return (this.collection.length === 0); 
    };

    /*
     * clear the queue
     */
    this.clear = function() {
        while (this.collection.length > 0) {
            this.collection.shift();
        }
    }
}

module.exports = Queue;