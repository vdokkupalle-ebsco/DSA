class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(data) {
    let node = new Node(data);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  prepend(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  appendNode(node) {
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    let node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this.size--;
    }
  }

  getAt(index) {
    let node = this.getNodeAt(index);
    return node ? node.data : null;
  }

  getNodeAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  printList() {
    let length = this.size;
    let current = this.head;
    let str = "";
    let count = 0;
    while (current) {
      str += current.data + " ";
      current = current.next;
      count++;
      if (count >= length) {
        console.log("Loop detected");
        break;
      }
    }
    console.log(str);
  }

  static fromArray(arr) {
    let ll = new LinkedList();
    arr.forEach((el) => {
      ll.append(el);
    });
    return ll;
  }

  static toArray(ll) {
    let arr = [];
    let current = ll.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export { LinkedList, Node };
