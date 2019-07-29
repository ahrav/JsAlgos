// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head) {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      return curr;
    }
    return null;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) return (this.head = null);
    let curr = this.head;
    let prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
  }

  insertLast(data) {
    const node = new Node(data);
    const last = this.getLast();
    node.next = last.next;
    last.next = node;
  }
}

module.exports = { Node, LinkedList };
