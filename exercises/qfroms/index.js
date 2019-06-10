// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// stack + stack = queue

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    // look through all record in first stack,
    // remove from first stack, add to second stack.
    // now second stack has first stack records in reverse,
    // effectively a Queue when call .pop() (first in, first out)
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    // keep a reference to the desired record
    const record = this.second.pop();

    // now move all records in second stack back to first to
    // get ready for next .remove call

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek(); // calls the stack's .peek()

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
