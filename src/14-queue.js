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
  get size() {
    let counter = 0;
    let { head } = this;
    while (head) {
      head = head.next;
      counter++;
    }
    return counter;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let node;
    if (this.head !== null) {
      node = this.head.value;
      this.head = this.head.next;
    }
    return node;
  }
}

module.exports = Queue;
