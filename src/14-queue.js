const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  get size() {
    let current = this.head;
    let count = 1;
    while (current.next !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  enqueue(element) {
    const node = new ListNode(element);
    node.next = null;
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    const res = this.head.value;
    this.head = this.head.next;
    return res;
  }
}

module.exports = Queue;
