/*
* Double linked list
*/
class Node {
    constructor (val) {
        this.head = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push method - add new node to the double linked list. i.e at ending point.
    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Pop method - remove last node from the double linked list i.e. tail.
    pop() {
        var tailNode = this.tail;

        if (!this.head) return "Nothing there to remove";
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tailNode.prev;
            this.tail.next = null;
            tailNode.prev = null;
        }
        this.length--;
        return this;
    }

    // Shift method - removing node from the begining of the double linked list.
    shift() {
        var headNode = this.head;

        if (!this.head) return "Nothing there to remove";
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = headNode.next;
            this.head.prev = null;
            headNode.next = null;
        }
        this.length--;
        return this;
    }

    // Unshift method - adding new node to double linked list at starting point.
    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Get method - get index value from double linked list.
    get(index) {
        var counter = 0;
        var current = this.head;

        if (index < 0 || index >= this.length) return "Out of range!!!";
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // Set method - change the value of a node based on its position in the linked list.
    set(val, index) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.head = val;
        }
        return this;
    }

    // Insert method - insert new node betweens the other nodes.
    insert(val, index) {
        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
        var nextNode = prevNode.next;

        if (index < 0 || index >= this.length) return "Out of range!!!";
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    // Remove method - removing a node from the double linked list at specific position.
    remove(index) {
        var current = this.head;
        var prevNode = this.get(index - 1);
        var removedNode = prevNode.next;
        var nextNode = removedNode.next;

        if (index < 0 || index >= this.length) return "Out of range!!!";
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.length--;
        return this;
    }

    // Reverse method - 

    // traverse/show the lsit.
    traverse() {
       var current = this.head;
       var list = [];
       while(current) {
           list.push(current.head);
           current = current.next;
       }
       return list;
    }
}

var dlist = new DoubleLinkedList();
dlist.push("Vijaya");
dlist.push("Kumar");
dlist.push("Vulchi");
