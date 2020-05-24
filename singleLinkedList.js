/*
* Single linked list
*/

class Node {
    constructor (val) {
        this.val = val;
        this.tail = null;
    }
}

class SingleLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push method - add new node to the linked list. i.e at ending point.
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Pop method - remove last node from the linked list i.e. tail.
    pop() {
        var current = this.head;
        var newTail = current;

        if (!this.head) return "Nothing there to remove";
        while(current.next) {
           newTail = current;
           current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        return this;
    }

    // Shift method - removing node from the begining of the linked list.
    shift() {
        var current = this.head;

        if (!this.head) return "Nothing there to remove";
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        return this;
    }

    // Unshift method - adding new node to linked list at starting point.
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Get method - get index value from linked list.
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
            foundNode.val = val;
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
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    // Remove method - removing a node from the linked list at specific position
    remove(index) {
        var current = this.head;
        var prevNode = this.get(index - 1);
        var removedNode;

        if (index < 0 || index >= this.length) return "Out of range!!!";
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        removedNode = prevNode.next;
        prevNode.next = removedNode.next;

        this.length--;
        return this;
    }

    // Reverse method - 

    // traverse/show the lsit.
    traverse() {
       var current = this.head;
       var list = [];
       while(current) {
           list.push(current.val);
           current = current.next;
       }
       return list;
    }
}

var list = new SingleLinkedList();
list.push("Vijaya");
list.push("Kumar");
list.push("Vulchi");
