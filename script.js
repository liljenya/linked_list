class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
        }
        else {
            let current = this.head;

            while (current.nextNode !== null) {
                current = current.nextNode;
            }

            current.nextNode = new Node(value);
        }
    }

    prepend(value) {
        let prevHead = this.head;
        let newHead = new Node(value);
        newHead.nextNode = prevHead;
        this.head = newHead;
    }

    size() {
        let sum = 0;
        let current = this.head;
        while (current !== null) {
            sum++;
            current = current.nextNode;
        }
        return sum;
    }

    headValue() {
        let current = this.head;
        if (current !== null) {
            return 'Head is:' + current.value;
        }
    }

    tail() {
        let current = this.head;

        if (current === null) {
            return 'List is empty';
        }

        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return 'Tail is: ' + current.value;
    }


    pop() {
        let current = this.head;

        if (current === null) {
            return 'Nothing to delete';
        }

        if (current.nextNode === null) {
            this.head = null;
        }

        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }

        let value = current.nextNode.value;
        current.nextNode = null;
        return value;
    }

    contains(num) {
        let current = this.head;
        while (current !== null) {
            if (current.value === num) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    at(index) {
        let current = this.head;
        let count = 0;

        if (current === null || index < 0) {
            return 'Oh no no';
        }
        else {
            while (current !== null) {
                if (count === index) {
                    return current;
                }
                current = current.nextNode;
                count++;
            }
        }
    }

    find(value) {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (current.value === value) {
                return count;
            }
            current = current.nextNode;
            count++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let string = '';

        while (current !== null) {
            string += current.value + "->";
            current = current.nextNode;
        }
        string += "null";
        return string;
    }

    insertAt(value, index) {
        if (index < 0) {
            return 'Oh no no';
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        let current = this.head;
        let count = 0;

        while (current !== null && count < index - 1) {
            current = current.nextNode;
            count++;
        }

        if (current === null) {
            return 'Index out of bounds';
        }

        let newNode = new Node(value);
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
    }

}


class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(50);
list.prepend(80);
console.log(list.size());
console.log(list.headValue());
console.log(list.tail());
console.log(list.at(1));
// list.pop();
console.log(list.contains(50));
console.log(list.find(50));
console.log(list.toString());
list.insertAt(200, 3);

let current = list.head;
while (current !== null) {
    console.log(current.value);
    current = current.nextNode;
}