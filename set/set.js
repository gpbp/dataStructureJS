/*
 * implementation of a set in Javascript
 * a set doesn't have duplicated data
 */

const Set = function() {
    this.collection = []; // this collection will hold the set

    /*
     * check for the presence of an element and return true or false
     */
    this.has = function(element) {
        return (this.collection.indexOf(element) !== -1);
    };

    /* 
     * return all the values in the set
     */
    this.values = function() {
        return this.collection;
    };

    /* 
     * add an element to the set
     */
    this.add = function(element) {
        if(!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    };

    /*
     * remove an element from a set
     */
    this.remove = function(element) {
        if (this.has(element)) {
            let index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    };

    /*
     * return the size of the collection
     */
    this.size = function() {
        return this.collection.length;
    };

    /*
     * return the union of two sets
     */
    this.union = function(otherSet) {
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach((element) => {
            unionSet.add(element);
        });
        secondSet.forEach((element) => {
            unionSet.add(element);
        });
        return unionSet;
    };

    /*
     * return the intersection of two sets as a new set
     */
    this.intersection = function(otherSet) {
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach((element) => {
            if(otherSet.has(element)){
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    };

    /*
     * return the difference of two sets as a new set
     */
    this.difference = function(otherSet) {
        let differenceSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    /*
     * check if the set is a subset of a different set
     */
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every((value) => {
          return otherSet.has(value);
        });
    };

    /*
     * clear the set
     */
    this.clear = function() {
        while (this.collection.length > 0) {
            this.collection.shift();
        }
    };
}

module.exports = Set;